"use strict";

/**
 * Create a Citizen class. Each Citizen should have
 * - a name
 * - a rank, randomly of 2, 3 and 4.
 * - a home (building), which is by default null.
 *
 * Write a toString() Method, to prepare your citizens
 * for the citizen Dictionary.
 *
 */

export default class Citizen{
    #name;
    #rank;
    #home;

    constructor(name){
        this.#name = name;
        this.#rank = Math.floor(Math.random() * 3) + 2;
        this.#home = null;
    }

    get name(){
        return this.#name;
    }

    set name(newName){
        if(typeof newName === "string" && newName !== ""){
            this.#name = newName;
        }
    }

    get rank(){
        return this.#rank;
    }

    set rank(newRank){
        if(Number.isInteger(newRank) && newRank >= 1 && newRank <= 4){
            this.#rank = newRank;
        }
    }

    get home(){
        return this.#home;
    }

    set home(newHome){
        this.#home = newHome;
    }

    toString(){
        return `${this.name}, Citizen, Rank ${this.rank}`;
    }

    /* Math.random() gives a value from 0 to <1
    3 scales it to 0–<3
    Math.floor(...) makes it 0, 1, 2
    + 2 shifts it to 2, 3, 4 */
}
