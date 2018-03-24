const app = {

    main: function() {
        app.compareScreenActive = false;
        app.displayList(pokemon);
        app.addConstantListeners();
        app.getMaxStats();
    },

    displayList: function(object){
        document.getElementById("loadingScreen").classList.remove("hide");
        let outputString = "";
        let counter = 1;
        object.forEach(function(gen){
            outputString += '<div class="row"><div class="col"><h2 class="genTitle">' + gen.region + '</h2></div></div>';
            gen.pokemon.forEach(function(poke){
                if (counter == 1){
                    outputString += '<div class="row">';
                }
                outputString += '<div class="col poke" data-id="' + poke.id + '" data-gen="' + gen.generation +'"><img src="img/sprites/' + poke.id + '.png" alt="a sprite for the Pokemon ' + poke.name + '"/></div>';
                if (counter == 3){
                    outputString += '</div>';
                    counter = 1;
                }
                else{
                    counter++;
                }
            });
            if (counter != 1){
                if (counter == 2){
                    outputString += '<div class="col"></div>'.repeat(2);
                }
                else{
                    outputString += '<div class="col"></div>';
                }
                outputString += '</div>';
            }
            counter = 1;
        });
        document.getElementById("pokeList").innerHTML = outputString;
        document.getElementById("loadingScreen").classList.add("hide");
        if (!app.compareScreenActive){
            app.addPokeListeners(true, app.pokeClickHandler);
        }
        else{
            app.addPokeListeners(true, app.compareSelectPokemonHandler);
        }
    },

    search: function(searchTerm){
        let searchResults = JSON.parse(JSON.stringify(pokemon));
        searchResults.forEach(gen => {
            gen.pokemon = gen.pokemon.filter(function(poke){
                if (poke.name.toLowerCase().includes(searchTerm)){
                    return true;
                }
            });
        });
        app.displayList(searchResults);
    },

    addConstantListeners: function(){
        [].forEach.call(document.querySelectorAll("#compareSelectScreen .compareSelectScreenButtons"), (button)=>{
            button.addEventListener("click", app.compareSelectButtonHandler);
        });
        document.getElementById("compareSelectScreenCloseButton").addEventListener("click",app.compareSelectCloseButtonHandler);
        document.querySelector("p.compareMenu").addEventListener("click",function(ev){
            ev.preventDefault();
            app.compareTransition(true, ev);
        });
        document.querySelector("p.pokemonMenu").addEventListener("click",function(ev){
            ev.preventDefault();
            app.compareTransition(false, ev);
        });
        document.getElementById("searchIcon").addEventListener("click",function(ev){
            ev.preventDefault();
            document.getElementById("searchBarRow").classList.add("showSearch");
            document.getElementById("searchBar").focus();
        });
        document.getElementById("closeSearchIcon").addEventListener("click",function(ev){
            ev.preventDefault();
            document.getElementById("searchBar").value = "";
            app.search("");
            document.getElementById("searchBarRow").classList.remove("showSearch");
        });
        document.getElementById("searchBar").addEventListener("keyup",function(ev){
            ev.preventDefault();
            app.search(ev.target.value.toLowerCase());
        });
        document.getElementById("closeButton").addEventListener("click", function(ev){
            ev.preventDefault();
            app.pageTransition(false);
        });
    },

    addPokeListeners: function(add, func){
        [].forEach.call(document.querySelectorAll("#pokeList .poke"), (poke)=>{
            if (add){
                poke.addEventListener("click", func);
            }
            else{
                poke.removeEventListener("click", func);
            }
        });
    },

    pokeClickHandler: function(clickedPoke){
        app.scrollPosition = clickedPoke.pageY - clickedPoke.clientY;
        clickedPoke.preventDefault();
        // window.scrollTo(0,0);
        let poke = clickedPoke.currentTarget;
        let id = poke.getAttribute("data-id");
        let generation = poke.getAttribute("data-gen");
        app.getPokeData(id, generation);
        app.pageTransition(true);
    },

    compareSelectButtonHandler: function(clickedButton){
        app.clickedCompareButton = clickedButton;
        // app.addPokeListeners(true, app.compareSelectPokemonHandler);
        document.querySelector("p.pokemonMenu").classList.add("displayNone");
        document.querySelector("p.compareMenu").classList.add("displayNone");
        document.querySelector("p.selectMenuText").classList.remove("displayNone");
        document.getElementById("compareSelectScreen").classList.add("fadeOut");
        document.getElementById("compareSelectScreenCloseButton").classList.remove("hideRight");
        document.getElementById("pokeList").classList.remove("hideRight", "fixed");
        document.getElementById("searchIcon").classList.remove("removeSearchIcon");
        setTimeout(() => {
            document.getElementById("searchIcon").classList.remove("hideSearchIcon");
        }, 0);
    },

    compareSelectPokemonHandler: function(clickedPoke){
        clickedPoke.preventDefault();
        if (app.clickedCompareButton.toElement.localName == "div"){
            app.clickedCompareButton.target.innerHTML = `<img src="${this.firstElementChild.getAttribute("src")}" class="selectedPokeToCompare" alt="${this.firstElementChild.getAttribute("alt")}"/>`;
            app.clickedCompareButton.target.setAttribute("data-id", this.getAttribute("data-id"));
            app.clickedCompareButton.target.setAttribute("data-gen", this.getAttribute("data-gen"));
        }
        else{
            app.clickedCompareButton.target.parentElement.innerHTML = `<img src="${this.firstElementChild.getAttribute("src")}" class="selectedPokeToCompare" alt="${this.firstElementChild.getAttribute("alt")}"/>`;
            app.clickedCompareButton.path[1].setAttribute("data-id", this.getAttribute("data-id"));
            app.clickedCompareButton.path[1].setAttribute("data-gen", this.getAttribute("data-gen"));
        }
        app.compareSelectCloseButtonHandler();
        // app.addPokeListeners(false, app.compareSelectPokemonHandler);
    },

    compareSelectCloseButtonHandler: function(ev){
        document.querySelector("p.pokemonMenu").classList.remove("displayNone");
        document.querySelector("p.compareMenu").classList.remove("displayNone");
        document.querySelector("p.selectMenuText").classList.add("displayNone");
        document.getElementById("compareSelectScreen").classList.remove("fadeOut");
        document.getElementById("compareSelectScreenCloseButton").classList.add("hideRight");
        document.getElementById("pokeList").classList.add("hideRight", "fixed");
        document.getElementById("searchIcon").classList.add("removeSearchIcon");
        setTimeout(() => {
            document.getElementById("searchIcon").classList.add("hideSearchIcon");
        }, 0);
    },

    compareTransition: function(showCompareScreen, ev){
        ev.target.classList.add("underline");
        if (showCompareScreen){
            app.scrollPosition = ev.pageY - ev.clientY;
            app.compareScreenActive = true;
            app.addPokeListeners(false, app.pokeClickHandler);
            app.addPokeListeners(true, app.compareSelectPokemonHandler);
            document.querySelector("p.pokemonMenu").classList.remove("underline");
            document.getElementById("compareSelectScreen").classList.add("show");
            document.getElementById("pokeList").classList.add("hideRight");
            document.getElementById("searchIcon").classList.add("hideSearchIcon");
            setTimeout(() => {
                document.getElementById("pokeList").classList.add("fixed");
                document.getElementById("searchIcon").classList.add("removeSearchIcon");
            }, 500);
        }
        else{
            app.compareScreenActive = false;
            document.querySelector("p.compareMenu").classList.remove("underline");
            document.getElementById("compareSelectScreen").classList.remove("show");
            document.getElementById("pokeList").classList.remove("hideRight", "fixed");
            app.addPokeListeners(false, app.compareSelectPokemonHandler);
            app.addPokeListeners(true, app.pokeClickHandler);
            window.scrollTo(0,app.scrollPosition);
            document.getElementById("searchIcon").classList.remove("removeSearchIcon");
            setTimeout(() => {
                document.getElementById("searchIcon").classList.remove("hideSearchIcon");
            }, 0);
        }
    },

    pageTransition: function(showStats){
        if (showStats){
            // document.getElementById("pokeList").classList.add("hides");
            document.getElementById("statScreen").classList.remove("hide");
            document.getElementById("statScreen").classList.add("show");
            window.setTimeout(function () {
                window.scrollTo(0,0);
                document.getElementById("pokeList").classList.add("fixed");
                document.getElementById("statScreen").classList.add("absolute");
            }, 500);
        }
        else{
            document.getElementById("statScreen").classList.remove("show");
            window.setTimeout(function () {
                document.getElementById("statScreen").classList = "container statScreen hide";
            }, 500);
            document.getElementById("pokeList").classList.remove("fixed");
            document.getElementById("statScreen").classList.remove("absolute");
            window.scrollTo(0,app.scrollPosition);
        }
    },

    getPokeData: function(id, generation){
        pokemon[generation - 1].pokemon.forEach(function(poke){
            if (poke.id == id){
                app.displayStats(poke);
            }
        });
    },

    displayStats: function(poke){
        document.getElementById("statScreen").classList.add("bg" + poke.type1);

        document.getElementById("statScreenImg").src = "img/sprites/" + poke.id + ".png";
        document.getElementById("statScreenImg").alt = "a sprite for the Pokemon " + poke.name;
        document.getElementById("statScreenName").innerText = poke.name;

        document.getElementById("statScreenType1").innerText = poke.type1;
        document.getElementById("statScreenType1Classes").classList = "col type1 " + poke.type1;

        if (poke.type2 != ""){
            document.getElementById("statScreenType2").innerText = poke.type2;
            document.getElementById("statScreenType2Classes").classList = "col type2 " + poke.type2;
        }
        else{
            document.getElementById("statScreenType2Classes").classList = "hide"
        }

        document.getElementById("statScreenCP").style = "width: " + (poke.maxCP / app.maxCP) * 100 + "%";
        document.getElementById("statScreenCP").setAttribute("aria-valuenow", poke.maxCP);
        document.getElementById("statScreenCP").setAttribute("aria-valuemax", app.maxCP);
        document.getElementById("statScreenCP").innerText = poke.maxCP;

        document.getElementById("statScreenAttack").style = "width: " + (poke.attack / app.maxAttack) * 100 + "%";
        document.getElementById("statScreenAttack").setAttribute("aria-valuenow", poke.attack);
        document.getElementById("statScreenAttack").setAttribute("aria-valuemax", app.maxAttack);
        document.getElementById("statScreenAttack").innerText = poke.attack;

        document.getElementById("statScreenDefense").style = "width: " + (poke.defense / app.maxDefense) * 100 + "%";
        document.getElementById("statScreenDefense").setAttribute("aria-valuenow", poke.defense);
        document.getElementById("statScreenDefense").setAttribute("aria-valuemax", app.maxDefense);
        document.getElementById("statScreenDefense").innerText = poke.defense;

        document.getElementById("statScreenHP").style = "width: " + (poke.hp / app.maxHP) * 100 + "%";
        document.getElementById("statScreenHP").setAttribute("aria-valuenow", poke.hp);
        document.getElementById("statScreenHP").setAttribute("aria-valuemax", app.maxHP);
        document.getElementById("statScreenHP").innerText = poke.hp;
        app.displayMoves(poke);  
    },

    displayMoves: function(poke){
        let moveTypeArray = [poke.quickMoves, poke.quickLegacy, poke.chargedMoves, poke.chargedLegacy];
        let stab = 1;
        let stabClass = null;
        let quickOutputString = `<div class="row"><div class="col"><h5>Quick Moves</h5></div><div class="col-3"><h5>DPS</h5></div></div>`;
        let chargedOutputString = `<div class="row"><div class="col"><h5>Charged Moves</h5></div><div class="col-3"><h5>DPS</h5></div></div>`;
        let moveDB = null;
        let legacyText = "";
        let skip = false;

        moveTypeArray.forEach(moveType => {
            if (moveType === poke.quickMoves || moveType === poke.quickLegacy){
                moveDB = moves[0].quick;
            }
            else{
                moveDB = moves[1].charged;
            }
            if (moveType === poke.quickLegacy || moveType === poke.chargedLegacy){
                if (moveType === poke.quickLegacy && poke.quickLegacy == []){
                    skip = true;
                }
                else if (moveType === poke.chargedLegacy && poke.chargedLegacy == []){
                    skip = true;
                }
                else{
                    legacyText = " (Legacy)";
                }
            }
            else{
                legacyText = "";
            }
            if (skip != true){
                moveType.forEach(id => {
                    moveDB.forEach(move => {
                        if (move.id == id){
                            if (poke.type1 == move.type || poke.type2 == move.type){
                                stab = 1.25;
                                stabClass = "STAB";
                            }
                            else{
                                stab = 1;
                                stabClass = "";
                            }
                            if (moveType === poke.quickMoves || moveType === poke.quickLegacy){
                                quickOutputString += `<div class="row"><div class="col"><p><img class="typeIcon" src="img/typeIcons/${move.type}.png" alt="${move.type} type icon"/>${move.name + legacyText}<p></div><div class="col-3"><p class="${stabClass}">${(stab * (move.power / (move.durationMS / 1000))).toFixed(2)}</p></div></div>`;
                            }
                            else{
                                chargedOutputString += `<div class="row"><div class="col"><p><img class="typeIcon" src="img/typeIcons/${move.type}.png" alt="${move.type} type icon"/>${move.name + legacyText}<p></div><div class="col-3"><p class="${stabClass}">${(stab * (move.power / (move.durationMS / 1000))).toFixed(2)}</p></div></div>`;
                                chargedOutputString += app.getChargeBars(move.energyCost, move.type);
                            }
                        }
                    });
                });
            }
            skip = false;
        });

        document.getElementById("quickMovesID").innerHTML = quickOutputString;
        document.getElementById("chargeMovesID").innerHTML = chargedOutputString;
    },

    getChargeBars: function(energyCost, type){
        let outputString = `<div class="row chargeBars"><div class="col-1"></div><div class="col chargeBar `;
        if (energyCost == 100){
            outputString += type;
        }
        if (energyCost == 50){
            // chargeBar50Left Poison"></div><div class="col chargeBar chargeBar50Right Poison
            outputString += `chargeBar50Left ${type}"></div><div class="col chargeBar chargeBar50Right ${type}`;
        }
        if (energyCost == 33){
            // Grass"></div><div class="col chargeBar chargeBar33 Grass"></div><div class="col chargeBar Grass
            outputString += `${type}"></div><div class="col chargeBar chargeBar33 ${type}"></div><div class="col chargeBar ${type}`;
        }
        outputString += `"></div><div class="col-1"></div></div>`;
        return outputString;
    },

    getMaxStats: function(){
        app.maxCP = 0;
        app.maxAttack = 0;
        app.maxDefense = 0;
        app.maxHP = 0;
        pokemon.forEach(function(gen){
            gen.pokemon.forEach(function(poke){
                if (poke.maxCP > app.maxCP){
                    app.maxCP = poke.maxCP;
                }
                if (poke.attack > app.maxAttack){
                    app.maxAttack = poke.attack;
                }
                if (poke.defense > app.maxDefense){
                    app.maxDefense = poke.defense;
                }
                if (poke.hp > app.maxHP){
                    app.maxHP = poke.hp;
                }
            });
        });
    }

};

let loadEvent = ("deviceready" in document)?"deviceready":"DOMContentLoaded";
document.addEventListener(loadEvent, app.main);