const app = {

    main: function() {
        app.version = 2;
        //app info is fetched in checkForUpdates
        app.info = {};
        app.BASEURL = "https://jordan-morrison.github.io/PokedexGo/json/";
        app.compareScreenActive = false;
        // app.firstVisit();
        app.checkForUpdates();
    },

    // firstVisit: function(){
    //     if (typeof(Storage) !== "undefined") {
    //         if (localStorage.firstVisit === undefined){
    //             localStorage.firstVisit = JSON.stringify(false);
    //             document.getElementById("pokeList").classList.add("fixed");
    //             document.getElementById("firstVisitScreenButton").addEventListener("click", function(){
    //                 document.getElementById("pokeList").classList.remove("fixed");
    //                 window.scrollTo(0,0);
    //                 document.getElementById("firstVisitScreen").classList.add("displayNone");
    //             });
    //         }
    //         else{
    //             document.getElementById("firstVisitScreen").classList.add("displayNone");
    //         }
    //     } else {
    //         document.getElementById("pokeList").classList.add("fixed");
    //         document.getElementById("firstVisitScreenButton").addEventListener("click", function(){
    //             document.getElementById("pokeList").classList.remove("fixed");
    //             window.scrollTo(0,0);
    //             document.getElementById("firstVisitScreen").classList.add("displayNone");
    //         });
    //     }
    // },

    checkForUpdates: function(){
        fetch(`${app.BASEURL}appInfo.json`)
        .then(result=>result.json())
        .then((data)=>{
            app.info = data;
            if (app.info.latestVersion.version != app.version){
                if (app.info.latestVersion.forced){
                    //You must update to continue
                    document.getElementById("newsContent").innerHTML = `<a href="https://github.com/Jordan-Morrison/PokedexGo"><div style=" background-color: #d20707; background: linear-gradient(180deg, #ff3019 0%,#cf0404 100%); color: white; height: 80px; font-size: 28px; text-align: center; border: dashed;"> <p style=" margin: 0;">UPDATE REQUIRED</p><p style=" font-size: 15px; margin: 0; font-style: italic;">Tap here to download</p></div></a>`;
                    document.getElementById("closeNewsButton").classList.add("displayNone");
                }
                else{
                    //There is an update available
                    document.getElementById("newsContent").innerHTML = `<a href="https://github.com/Jordan-Morrison/PokedexGo"><div style=" background-color: #d20707; background: linear-gradient(180deg, #ff3019 0%,#cf0404 100%); color: white; height: 80px; font-size: 28px; text-align: center; border: dashed;"> <p style=" margin: 0;">UPDATE AVAILABLE</p><p style=" font-size: 15px; margin: 0; font-style: italic;">Tap here to download</p></div></a>`;
                    app.getData();
                }
            }
            else{
                app.getData();
            }
        })
        .catch(function(err){
            console.log("Failed to fetch");
        });
    },

    getData: function(){
        document.getElementById("loadingScreen").classList.remove("hide");
        // let files = ["appInfo.json", "pokemon.json", "futurePokemon.json", "moves.json", "weather.json"];

        fetch(`${app.BASEURL}pokemon.json`)
        .then(result=>result.json())
        .then((data)=>{
            app.pokemon = data.data;
            fetch(`${app.BASEURL}futurePokemon.json`)
            .then(result=>result.json())
            .then((data)=>{
                app.futurePokemon = data.data;
                fetch(`${app.BASEURL}moves.json`)
                .then(result=>result.json())
                .then((data)=>{
                    app.moves = data.data;

                    app.getNews(app.BASEURL);
                    app.displayList(app.pokemon);
                    app.addConstantListeners();
                    app.getMaxStats();
                    document.getElementById("loadingScreen").classList.add("hide");
                })
                .catch(function(err){
                    console.log("Failed to fetch");
                });
            })
            .catch(function(err){
                console.log("Failed to fetch");
            });
        })
        .catch(function(err){
            console.log("Failed to fetch");
        });

    },

    getNews: function(){
        if (typeof(Storage) !== "undefined") {
            if (localStorage.newsVersion != app.info.news.version){
                localStorage.newsVersion = app.info.news.version;
                document.getElementById("newsContent").innerHTML += app.info.news.content;
                document.getElementById("newsWindow").classList.remove("displayNone");
            }
            else if (app.info.latestVersion.version != app.version){
                localStorage.newsVersion = app.info.news.version;
                document.getElementById("newsContent").innerHTML += app.info.news.content;
                document.getElementById("newsWindow").classList.remove("displayNone");
            }
        }
        else{
            document.getElementById("newsContent").innerHTML += app.info.news.content;
            document.getElementById("newsWindow").classList.remove("displayNone");
        }
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
                outputString += '<div class="col poke" data-id="' + poke.id + '" data-gen="' + gen.generation +'"><img src="img/sprites/' + app.getSprite(poke.id, 0, false) + '.png" alt="a sprite for the Pokemon ' + poke.name + '"/></div>';
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

    getSprite: function(dex, form, shiny){
        //check if pokemon is implemented yet
        if (app.futurePokemon.pokes.includes(dex)){
            return `DS/${dex}`;
        }
        //check if unown or castform
        if (dex == 201 || dex == 351){
            form = 11;
        }

        if (shiny == true){
            shiny = "_shiny";
        }
        else{
            shiny = "";
        }
        if (form < 10){
            form = `0${form}`;
        }

        if (dex < 10){
            return `pokemon_icon_00${dex}_${form + shiny}`;
        }
        else if (dex < 100){
            return `pokemon_icon_0${dex}_${form + shiny}`;
        }
        else{
            return `pokemon_icon_${dex}_${form + shiny}`;
        }
    },

    search: function(searchTerm){
        let searchResults = JSON.parse(JSON.stringify(app.pokemon));
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
        document.getElementById("compareSelectButton").addEventListener("click", app.compareButtonHandler);
        document.getElementById("compareScreenCloseButton").addEventListener("click", app.compareScreenCloseButtonHandler);
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
        document.getElementById("closeNewsButton").addEventListener("click", function(){
            document.getElementById("newsWindow").classList.add("displayNone");
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
        app.displayStats(app.getPokeData(id, generation));
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

    compareButtonHandler: function(ev){
        ev.preventDefault();
        let pokes = [];
        let counter = 0;
        document.querySelectorAll(".compareSelectScreenButtons").forEach(button => {
            if (button.getAttribute("data-id")){
                counter++;
                pokes.push(app.getPokeData(button.getAttribute("data-id"), button.getAttribute("data-gen")));
            }
        });
        if (counter >= 2){
            app.displayComparedPokes(pokes);
            app.displayComparedStats(pokes);
            app.displayComparedMoves(pokes);
            document.getElementById("compareScreen").classList.add("show");
            document.getElementById("compareScreenCloseButton").classList.remove("hideBottom");
            document.getElementById("compareScreen").scrollTo(0,0);
            setTimeout(() => {
                [].forEach.call(document.querySelectorAll("#compareSelectScreen .compareSelectScreenButtons"), (button)=>{
                    button.innerHTML = "&#43;";
                    button.removeAttribute("data-id");
                    button.removeAttribute("data-gen");
                });
            }, 500);
        }
        else{
            alert("You must choose at least 2 Pokemon to compare!");
        }
    },

    displayComparedPokes: function(pokes){
        let outputString = `<div class="row comparedPokes"><h1 class="comparingTitle">Comparing</h1>`;
        pokes.forEach(poke => {
            if (pokes.length == 2){
                outputString += `<div class="col-6"><p>${poke.name}</p><img src="img/sprites/${app.getSprite(poke.id, 0, false)}.png" class="comparedPokes2Selected" alt="a sprite for the Pokemon ${poke.name}"/></div>`;
            }
            else{
                outputString += `<div class="col"><p>${poke.name}</p><img src="img/sprites/${app.getSprite(poke.id, 0, false)}.png" alt="a sprite for the Pokemon ${poke.name}"/></div>`;
            }
        });
        outputString += `</div>`;
        document.getElementById("compareScreen").innerHTML = outputString;
    },

    displayComparedStats: function(pokes){
        let outputString = "";
        pokes.forEach(poke => {
            outputString += `<div class="row compareStatsRow"><div class="compareSpriteBox Transparent${poke.type1}"><p>cp${poke.maxCP}</p><img src="img/sprites/${app.getSprite(poke.id, 0, false)}.png" alt="a sprite for the Pokemon ${poke.name}"/></div><div class="col compareStatsBox"><ul class="list-group compareStatsList"><li class="list-group-item"><div class="row compareTypesRow"><div class="col type1 compareType ${poke.type1}"><p>${poke.type1}</p></div>`;
            if (poke.type2 != ""){
                outputString += `<div class="col type2 compareType ${poke.type2}"><p>${poke.type2}</p></div>`;
            }
            outputString += `</div></li><li class="list-group-item"><div class="progress"><div class="progress-bar progress-bar-striped bg-attack" role="progressbar" style="width: ${(poke.attack / app.maxAttack) * 100}%" aria-valuenow="${poke.attack}" aria-valuemin="0" aria-valuemax="${app.maxAttack}">Attack:&nbsp;${poke.attack}</div></div></li><li class="list-group-item"><div class="progress"><div class="progress-bar progress-bar-striped bg-defense" role="progressbar" style="width: ${(poke.defense / app.maxDefense) * 100}%" aria-valuenow="${poke.defense}" aria-valuemin="0" aria-valuemax="${app.maxDefense}">Defense:&nbsp;${poke.defense}</div></div></li><li class="list-group-item"><div class="progress"><div class="progress-bar progress-bar-striped bg-hp" role="progressbar" style="width: ${(poke.hp / app.maxHP) * 100}%" aria-valuenow="${poke.hp}" aria-valuemin="0" aria-valuemax="${app.maxHP}">HP:&nbsp;${poke.hp}</div></div></li></ul></div></div>`;
        });
        document.getElementById("compareScreen").innerHTML += outputString;
    },

    displayComparedMoves: function(pokes){
        let outputString = "<h1 class='compareMovesTitle'>Moves</h1>";
        let moveResults = null;
        pokes.forEach(poke => {
            moveResults = app.displayMoves(poke, true);
            outputString += "<ul class='list-group compareMovesRow'><li class='list-group-item'>" + moveResults[0] + "</li><li class='list-group-item'>" + moveResults[1] + "</li></ul>";
        });
        document.getElementById("compareScreen").innerHTML +=  outputString;
    },

    compareScreenCloseButtonHandler: function(ev){
        ev.preventDefault();
        document.getElementById("compareScreen").classList.remove("show");
        document.getElementById("compareScreenCloseButton").classList.add("hideBottom");
    },

    compareSelectPokemonHandler: function(clickedPoke){
        clickedPoke.preventDefault();
        document.getElementById("closeSearchIcon").click();
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
        document.getElementById("closeSearchIcon").click();
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
            document.getElementById("closeSearchIcon").click();
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
        let pokeData = null;
        app.pokemon[generation - 1].pokemon.forEach(function(poke){
            if (poke.id == id){
                // app.displayStats(poke);
                pokeData = poke;
            }
        });
        return pokeData;
    },

    displayStats: function(poke){
        document.getElementById("statScreen").classList.add("bg" + poke.type1);

        document.getElementById("statScreenImg").src = "img/sprites/" + app.getSprite(poke.id, 0, false) + ".png";
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

        let movesOutput = app.displayMoves(poke, false);
        document.getElementById("quickMovesID").innerHTML = movesOutput[0];
        document.getElementById("chargeMovesID").innerHTML = movesOutput[1];  
    },

    displayMoves: function(poke, forComparing){
        let moveTypeArray = [poke.quickMoves, poke.quickLegacy, poke.chargedMoves, poke.chargedLegacy];
        let stab = 1;
        let stabClass = null;
        let quickOutputString = `<div class="row"><div class="col"><h5>Quick Moves</h5></div><div class="col-3"><h5>DPS</h5></div></div>`;
        let chargedOutputString = `<div class="row"><div class="col"><h5>Charged Moves</h5></div><div class="col-3"><h5>DPS</h5></div></div>`;
        if (forComparing){
            quickOutputString = `<div class="row"><div class="col"><img src="img/sprites/${app.getSprite(poke.id, 0, false)}.png" class="compareMovesSprite" alt="a sprite for the Pokemon ${poke.name}"/><h5>${poke.name}'s Moves</h5></div><div class="col-3"><h5>DPS</h5></div></div>`;
            chargedOutputString = ``;
        }
        let moveDB = null;
        let legacyText = "";
        let skip = false;

        moveTypeArray.forEach(moveType => {
            if (moveType === poke.quickMoves || moveType === poke.quickLegacy){
                moveDB = app.moves[0].quick;
            }
            else{
                moveDB = app.moves[1].charged;
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
        return [quickOutputString, chargedOutputString];
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
        app.pokemon.forEach(function(gen){
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

// //ONLY Native
// document.addEventListener("deviceready", function(){
//     window.ga.startTrackerWithId('UA-114276551-1', 30);
//     window.ga.trackView('Pokedex Go Android');
// });

let loadEvent = ("deviceready" in document)?"deviceready":"DOMContentLoaded";
document.addEventListener(loadEvent, app.main);