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
    new Species("Apeman",["Beast","Humanoid"],"Medium"),
    new Species("Cyclops",["Anamoly","Humanoid"],"Medium"),,
    new Species("Human",["Humanoid"],"Medium"),,
    new Species("Mutant",["Anomaly","Human","Humanoid"],"Medium"),,
    new Species("Oozeling",["Alien","Anomaly","Humanoid"],"Medium"),
]


function entityCreate()
{
    let entitySex = sex[utility.getRandomInt(2)];
    let entityFirstName = namesFirst[entitySex][utility.getRandomInt(namesFirst[entitySex].length)];
    let entityLastName = namesLast[utility.getRandomInt(namesLast.length)];
    let entitySpecies = species[utility.getRandomInt(species.length)];
  
    let player = new Entity(entityFirstName,entityLastName,entitySex,entitySpecies);
    console.log(player);
}
