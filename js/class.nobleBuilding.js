"use strict";

/**
 * Create a NobleBuilding class. It's basically the same as a regular building
 * with one exception: Only nobles allowed.
 */

import Building from "./class.building.js";

export default class NobleBuilding extends Building{
    constructor(name, capacity){
        super(name, capacity);
    }

    addResident(citizen){
        if(citizen.rank === 1){
            return super.addResident(citizen);
        }

        return false;
    }
}
