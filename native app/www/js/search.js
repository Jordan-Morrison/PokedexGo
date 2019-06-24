const search = {

    types: ["normal","fire","fighting","water","flying","grass","poison","electric","ground","psychic","rock","ice","bug","dragon","ghost","dark","steel","fairy"],

    search: function(searchString){
        let searchResults = JSON.parse(JSON.stringify(app.pokemon));
        searchString = searchString.toLowerCase();

        let searchTerms = searchString.split("&");

        searchTerms.forEach(searchTerm => {
            searchTerm = searchTerm.trim();

            if (searchTerm != ""){
                // Searching for shiny Pokemon
                if (searchTerm == "shiny"){
                    searchResults = search.filterPokes(searchResults, search.shinySearch);
                }
                // Searching for non-shiny Pokemon
                else if (searchTerm == "!shiny"){
                    searchResults = search.filterPokes(searchResults, search.notShinySearch);
                }
                // Searching for a Pokemon with a certain move type
                else if (searchTerm[0] == "@" && search.types.includes(searchTerm.substr(1))){
                    searchResults = search.filterPokes(searchResults, search.moveTypeSearch, searchTerm.substr(1));
                }
                // Searching for a Pokemon without a certain move type
                else if (searchTerm.substr(0,2) == "!@" && search.types.includes(searchTerm.substr(2))){
                    searchResults = search.filterPokes(searchResults, search.notMoveTypeSearch, searchTerm.substr(2));
                }
                // Searching for a certain move
                else if (searchTerm[0] == "@"){
                    searchTerm = searchTerm.substr(1).toUpperCase().replace(" ", "_");
                    searchResults = search.filterPokes(searchResults, search.moveSearch, searchTerm);
                }
                // Searching for Pokemon wihout the specified move
                else if (searchTerm.substr(0,2) == "!@"){
                    searchTerm = searchTerm.substr(2).toUpperCase().replace(" ", "_");
                    searchResults = search.filterPokes(searchResults, search.notMoveSearch, searchTerm);
                }
                // Searching for a certain type
                else if (search.types.includes(searchTerm)){
                    searchResults = search.filterPokes(searchResults, search.typeSearch, searchTerm);
                }
                // Searching for Pokemon without the specified type
                else if (searchTerm[0] == "!" && search.types.includes(searchTerm.substr(1))){
                    searchResults = search.filterPokes(searchResults, search.notTypeSearch, searchTerm.substr(1));
                }
                // Searching for Pokemon without the specified Pokemon
                else if (searchTerm[0] == "!"){
                    searchResults = search.filterPokes(searchResults, search.notNameSearch, searchTerm.substr(1));
                }
                // Searching by Pokemon name
                else{
                    searchResults = search.filterPokes(searchResults, search.nameSearch, searchTerm);
                }
            }

        });
        app.displayList(searchResults);
    },

    filterPokes: function(searchResults, filter, searchTerm = false){
        searchResults.forEach(gen => {
            gen.pokemon = gen.pokemon.filter(function(poke){
                if (searchTerm){
                    return filter(poke, searchTerm);
                }
                return filter(poke);
            });
        });
        return searchResults;
    },

    shinySearch: function(poke){
        if (poke.shiny){
            return true;
        }
    },

    notShinySearch: function(poke){
        if (!poke.shiny){
            return true;
        }
    },

    moveSearch: function(poke, searchTerm){
        if (poke.quickMoves.includes(`${searchTerm}_FAST`) || poke.chargedMoves.includes(searchTerm) || poke.quickLegacy.includes(`${searchTerm}_FAST`) || poke.chargedLegacy.includes(searchTerm)){
            return true;
        }
    },

    notMoveSearch: function(poke, searchTerm){
        if (!poke.quickMoves.includes(`${searchTerm}_FAST`) && !poke.chargedMoves.includes(searchTerm) && !poke.quickLegacy.includes(`${searchTerm}_FAST`) && !poke.chargedLegacy.includes(searchTerm)){
            return true;
        }
    },

    moveTypeSearch: function(poke, searchTerm){
        if (search.getMoveTypes(poke).includes(searchTerm)){
            return true;
        }
    },

    notMoveTypeSearch: function(poke, searchTerm){
        if (!search.getMoveTypes(poke).includes(searchTerm)){
            return true;
        }
    },

    typeSearch: function(poke, searchTerm){
        if (poke.type1.toLowerCase() == searchTerm || poke.type2.toLowerCase() == searchTerm){
            return true;
        }
    },

    notTypeSearch: function(poke, searchTerm){
        if (poke.type1.toLowerCase() != searchTerm && poke.type2.toLowerCase() != searchTerm){
            return true;
        }
    },

    nameSearch: function(poke, searchTerm){
        if (poke.name.toLowerCase().includes(searchTerm)){
            return true;
        }
    },

    notNameSearch: function(poke, searchTerm){
        if (!poke.name.toLowerCase().includes(searchTerm)){
            return true;
        }
    },

    getMoveTypes: function(poke){
        let pokeMoves = [];
        let moveTypes = [];
        pokeMoves = pokeMoves.concat(poke.quickMoves).concat(poke.chargedMoves);
        if (typeof poke.quickLegacy != "string"){
            pokeMoves = pokeMoves.concat(poke.quickLegacy);
        }
        if (typeof poke.chargedLegacy != "string"){
            pokeMoves = pokeMoves.concat(poke.chargedLegacy);
        }

        pokeMoves.forEach(pokeMove => {
            let foundQuickMove = app.moves[0].quick.find(function(move){
                return move.id == pokeMove;
            });
            let foundChargedMove = app.moves[1].charged.find(function(move){
                return move.id == pokeMove;
            });
            if (foundQuickMove){
                moveTypes.push(foundQuickMove.type.toLowerCase());
            }
            else if (foundChargedMove){
                moveTypes.push(foundChargedMove.type.toLowerCase());
            }
        });
        return moveTypes;
    }

};