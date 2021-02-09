//!!Look into different gender options + allowed-name combos.AKA representation. 
//!!This is solely for testing. Not sure if, but, if gender has no gameplay/gamemechanics tied to it, why bother with restriction at all?

const sex = [
    "male",
    "female"
];

const namesFirst = {
    "male": [
        "John",
        "Paul",
        "Pete",
        "Peter",
        "Rick",
        "Ron",
        "Sam",
        "Smithy"
    ],

    "female": [
        "Anna",
        "Betty",
        "Judy",
        "Nancy",
        "Patrica",
        "Suzan",
        "Sally"
    ],
}

const namesLast = [
    "Anderson",
    "Billow",
    "Elliot",
    "Farland",
    "Farmer",
    "Green",
    "Grimes",
    "Smith"
]

const species = [
    new Species(0,"Apeman",["Beast","Humanoid"],"Medium",40),
    new Species(1,"Cyclops",["Anamoly","Humanoid"],"Medium",60),
    new Species(2,"Human",["Humanoid"],"Medium",70),
    new Species(3,"Mutant",["Anomaly","Human","Humanoid"],"Medium",55),
    new Species(4,"Oozeling",["Alien","Anomaly","Humanoid"],"Medium",100),
]


function entityCreate()
{
    let entitySex = sex[utility.getRandomInt(2)];
    let entityFirstName = namesFirst[entitySex][utility.getRandomInt(namesFirst[entitySex].length)];
    let entityLastName = namesLast[utility.getRandomInt(namesLast.length)];
    let entitySpecies = species[utility.getRandomInt(species.length)];
    let entityAge = species[entitySpecies.index].ageLimitAverage;

    //there is a chance that it adds 0-10% of ageLimitAverage to entity age
    entityAge = utility.getRandomInt(entityAge+(utility.getRandomInt(Math.floor(entityAge/10))));

    let player = new Entity(entityFirstName,entityLastName,entitySex,entitySpecies,entityAge);        
    console.log(player);
}
