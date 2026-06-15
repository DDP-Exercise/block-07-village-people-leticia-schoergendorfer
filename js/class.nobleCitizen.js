"use strict";
/**
 * Create a NobleCitizen class. A Noble Citizen is basically
 * the same as a regular citizen, just with rank 1 and another
 * representation in the Citizen Dictionary (see the img folder).
 */

import Citizen from "./class.citizen.js";

export default class NobleCitizen extends Citizen{
    constructor(name){
        super(name);
        this.rank = 1;
    }

    toString(){
        return `${this.name}, Noble Citizen`;
    }
}
