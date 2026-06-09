"use strict";
import Village from "./class.village.js";

/*******************************************************
 *    The Village People - 100p
 *
 *    It's the year 980. We need you to start the digital
 *    revolution (just accept that scenario :D)!
 *
 *    The King wants an automated system for new villages
 *    to shelter their citizens, based on their rank in society.
 *    Of course, citizens of lower rank will have to make space
 *    for more important citizens, and live on the streets!
 *    It's 980 - not every life is worth the same!
 *
 *    In case you forgot: The King is rank 0! Nothing is beyond
 *    the King. Nobles are rank 1. And Citizens range from
 *    rank 2-4. A random rank should be assigned in their
 *    constructor.
 *
 *    In the name of the king, we give you this file.
 *              >>> Do not change this file! <<<
 *    Just add other files ot make it work.
 *    How? Find a way, or you will hang coming tuesday!
 *
 *    The royal servants - 980-06-01
 *  *******************************************************/


/**
 * The King wants to test your program with his newest village: Steyr
 * Obviously, you should write a class, so we can create villages.
 * **/
let steyr = new Village("Steyr");

/**
 * The royal administration then wants to add Buildings to a new village.
 *
 * Each building should have a name and a capacity (= How many residents
 * can reside in this building).
 *
 * Also, as of today's standard, there should be buildings, which are for
 * Noble Citizens, and Noble Citizens only!!!. In this test-case,
 * the "Rathaus" is such a nobles-only building.
 * **/
steyr.addBuilding("Rathaus", 3, true); //3rd argument, "true", is for nobles-only buildings.
steyr.addBuilding("Grünmarkt", 5);
steyr.addBuilding("Bummerlhaus", 10);

/**
 *  This is a list of interested citizens and nobles who want to live
 *  in Steyr. But remember, your program should work all around the Austrian Empire,
 *  for all villages to come! Therefore, we shuffled the lists for you. Think of
 *  it as a random testlist of citizens and nobles.
 * **/

let citizens = ["Lorenzo Musetti", "Elina Svitolina", "Belinda Bencic", "Ben Shelton", "Denis Shapovalov",
    "Naomi Osaka", "Casper Ruud", "Andrey Rublev", "Tommy Paul", "Tallon Griekspoor", "Anastasia Potapova", "Maria Sakkari",
    "Angelique Kerber", "Julia Grabher", "Lilly Tagger", "Sinja Kraus", "Sebastian Ofner", "Lucas Miedler", "Jürgen Melzer",
        "Lukas Neumayer", "Filip Misolic", "Joel Schwärzler"]; //22
let nobles = ["Roger Federer", "Serena Williams", "Novak Djokovic", "Maria Sharapova", "Rafael Nadal", "Venus Williams",
"Stanislas Wawrinka", "Steffi Graf", "Dominik Thiem", "Sir Andy Murray"]; // 10

citizens = shuffleArray(citizens);
nobles = shuffleArray(nobles);

/**
 *  This is how we want citizens to be registered in a village.
 *
 *  To test the correct and fair distribution of citizens based on their rank,
 *  we add regular citizens first and see what happens, when we add the nobles
 *  later on. Some people will have to make space for the better of us...
 * **/

for(const citizen of citizens)
    steyr.addCitizen(citizen);

for(const noble of nobles)
    steyr.addCitizen(noble, true);

/**
 *  When we shelter the nobles in a building, some lower citizens might have to make room.
 *
 *  Now, as life happens to be fair these days, we acknowledge that a noble Citizen (rank 1)
 *  could kick a rank 2 citizen out of a building to the streets. But at the same time, a rank 3
 *  or even rank 4 citizen is still living comfortably in another building! And such an injustice
 *  can not be tolerated!
 *
 *  Therefore, once, all the nobles are sheltered, we want to make sure, that all citizens who had to
 *  pack their stuff, will be redistributed to the other buildings, if their rank allows it.
 * **/
steyr.shelterTheWorthy();

/**
 *  Once, all the citizens are sheltered in the city, your programm should print a Citizen Directory.
 *  Find provided images in the img folder, to see what this should look like.
 *  **/
steyr.printCitizenDirectory();


//Helper Function to shuffle arrays
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**Test**/
