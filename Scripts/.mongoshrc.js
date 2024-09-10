// mongoshrc.js - EXAMPLES

// *********** Set default mongo shell *************
config.set( "editor", "nano" )

// *********** Simple random greeting when shell starts ****************

var compliment = ["attractive", "intelligent", "like Batman"];
var index = Math.floor(Math.random()*3);

print("Hello, you're looking particularly " + compliment[index] + " today!");

// *********** Fat-Finger simple/default db protections *************

// Define the no function to prevent specific actions
var no = function() {
    print("Not on my watch.");
};

// Get the prototype for DB and DBCollection
var dbPrototype = Object.getPrototypeOf(db);
var dbCollectionPrototype = Object.getPrototypeOf(db.getCollection("dummy"));

// Prevent dropping databases
dbPrototype.dropDatabase = no;

// Prevent dropping collections
dbCollectionPrototype.drop = no;

// Prevent dropping indexes
dbCollectionPrototype.dropIndex = no;

// ************ Customize your mongo prompt example ******************

/*prompt = function() {
    return (new Date()) + "> ";
};*/

// ************* Custom Prompt to show current database ***************

prompt = function() {
    if (typeof db == 'undefined') {
        return '(nodb)> ';
    }

    return db.getName()+"> ";
};

