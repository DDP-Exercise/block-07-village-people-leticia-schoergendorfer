"use strict";

/**
 * Create a Village class. Each village should have
 * - a name
 * - an array of its buildings
 * - an array of its citizens
 *
 * You can see in main.js what methods a village should provide.
 * implement them.
 */

import Citizen from "./class.citizen.js";
import NobleCitizen from "./class.nobleCitizen.js";
import Building from "./class.building.js";
import NobleBuilding from "./class.nobleBuilding.js";

export default class Village{
    #name;
    #buildings;
    #citizens;

    constructor(name){
        this.#name = name;
        this.#buildings = [];
        this.#citizens = [];
    }

    get name(){
        return this.#name;
    }

    get buildings(){
        return this.#buildings.slice();
    }

    get citizens(){
        return this.#citizens.slice();
    }

    addBuilding(name, capacity, isNobleBuilding = false){
        let building;

        if(isNobleBuilding === true){
            building = new NobleBuilding(name, capacity);
        }else{
            building = new Building(name, capacity);
        }

        this.#buildings.push(building);
    }

    addCitizen(name, isNoble = false){
        let citizen;

        if(isNoble === true){
            citizen = new NobleCitizen(name);
        }else{
            citizen = new Citizen(name);
        }

        this.#citizens.push(citizen);
        this.tryToShelter(citizen);
    }

    tryToShelter(citizen){
        for(const building of this.#buildings){
            if(building.addResident(citizen)){
                return true;
            }
        }

        return false;
    }

    shelterTheWorthy(){
        let homelessCitizens = [];

        for(const citizen of this.#citizens){
            if(citizen.home === null){
                homelessCitizens.push(citizen);
            }
        }

        homelessCitizens.sort(function(a, b){
            return a.rank - b.rank;
        });

        for(const citizen of homelessCitizens){
            this.tryToShelter(citizen);
        }
    }

    printCitizenDirectory(){
        for(const building of this.#buildings){
            console.log(building.listAllResidents());
        }

        console.log(`Homeless People of ${this.#name}:`);

        for(const citizen of this.#citizens){
            if(citizen.home === null){
                console.log(citizen.toString());
            }
        }

        if(typeof document !== "undefined"){
            let oldDirectory = document.querySelector("#citizen-directory");

            if(oldDirectory !== null){
                oldDirectory.remove();
            }

            let directory = document.createElement("main");
            directory.id = "citizen-directory";

            let headline = document.createElement("h1");
            headline.textContent = `Citizen Directory of ${this.#name}`;
            directory.append(headline);

            for(const building of this.#buildings){
                directory.append(this.makeBuildingCard(building));
            }

            directory.append(this.makeStreetCard());
            document.body.append(directory);
        }
    }

    makeBuildingCard(building){
        let section = document.createElement("section");
        let headline = document.createElement("h2");
        let list = document.createElement("ul");

        headline.textContent = `Residents of ${building.name} (${building.residents.length}/${building.capacity}):`;
        section.append(headline);

        let sortedResidents = building.residents.slice().sort(function(a, b){
            return a.rank - b.rank;
        });

        for(const resident of sortedResidents){
            let listItem = document.createElement("li");
            listItem.textContent = resident.toString();
            list.append(listItem);
        }

        section.append(list);
        return section;
    }

    makeStreetCard(){
        let section = document.createElement("section");
        let headline = document.createElement("h2");
        let list = document.createElement("ul");

        headline.textContent = `Homeless People of ${this.#name}:`;
        section.append(headline);

        for(const citizen of this.#citizens){
            if(citizen.home === null){
                let listItem = document.createElement("li");
                listItem.textContent = citizen.toString();
                list.append(listItem);
            }
        }

        section.append(list);
        return section;
    }
}
