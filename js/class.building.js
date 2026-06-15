"use strict";
/**
 * Create a Building class. Each Building should have
 * - a name
 * - a capacity
 * - an array of its residents
 *
 * Each Building should provide methods to
 * - addResident(citizen)
 *      - If there is still space in the building, add the citizen as resident.
 *        also mark this building as the citizens home.
 *      - If there is no space, check if someone has to makeSpaceFor(citizen) (= is there
 *        a resident in this building with a lower rank?)
 * - removeResident(citizen)
 *      - Kick a resident out of the building. Also delete the citizens home (null).
 *      - Attention: When you kick a resident, make sure there is no lower ranked
 *        resident remaining in the building.
 * - listAllResidents() for the Citizen Directory.
 */

export default class Building{
    #name;
    #capacity;
    #residents;

    constructor(name, capacity){
        this.#name = name;
        this.#capacity = capacity;
        this.#residents = [];
    }

    get name(){
        return this.#name;
    }

    get capacity(){
        return this.#capacity;
    }

    get residents(){
        return this.#residents.slice();
    }

    addResident(citizen){
        if(this.#residents.includes(citizen)){
            return true;
        }

        if(this.#residents.length < this.#capacity){
            this.#residents.push(citizen);
            citizen.home = this;
            return true;
        }

        let citizenToKick = this.makeSpaceFor(citizen);

        if(citizenToKick !== null){
            this.removeResident(citizenToKick);
            this.#residents.push(citizen);
            citizen.home = this;
            return true;
        }

        return false;
    }

    makeSpaceFor(citizen){
        let citizenToKick = null;

        for(const resident of this.#residents){
            if(resident.rank > citizen.rank){
                if(citizenToKick === null || resident.rank > citizenToKick.rank){
                    citizenToKick = resident;
                }
            }
        }

        return citizenToKick;
    }

    removeResident(citizen){
        let index = this.#residents.indexOf(citizen);

        if(index !== -1){
            this.#residents.splice(index, 1);
            citizen.home = null;
            return true;
        }

        return false;
    }

    listAllResidents(){
        let text = `Residents of ${this.#name} (${this.#residents.length}/${this.#capacity}):\n`;
        let sortedResidents = this.#residents.slice().sort(function(a, b){
            return a.rank - b.rank;
        });

        for(const resident of sortedResidents){
            text += resident.toString() + "\n";
        }

        return text.trimEnd();
    }
}
