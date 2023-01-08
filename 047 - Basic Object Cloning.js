/*
CHALLENGE:
Use object.assign to copy over object parameters
As seen on Javascript.info
*/

let userDatabase = {
  name: "Berry",
  nick: "BerrytheBest2022",
  age: 22,
  isAdmin: true,
  canEdit: false,
  canView: true,
};

let newPermission = { canPrint: true };

Object.assign(userDatabase, newPermission);

console.log(userDatabase);
// Now contains: canPrint: true as well

let changeName = { nick: "BerrytheBest2023" };

Object.assign(userDatabase, changeName);

console.log(userDatabase["nick"]);
// Overwritten to BerrytheBest2023
// Since nick was already defined inside userDatabase, it will get overwritten!

let admin = { name: "Admin" };

let hackerman = admin;

// This does not copy the object called admin.
// Instead of other JS data types, which do create copies, this object is the same, single object.
// Both admin and hackerman are references to the single 'admin' object. Nothing is cloned.

let clone = Object.assign({}, userDatabase);

// Now all of the properties of userDatabase are properly assigned to clone.

console.log(clone); // Works!

// To prove it, let's revoke Berry's admin's rights in the clone object and compare

clone.isAdmin = false;

let booleanResponse = clone.isAdmin === userDatabase.isAdmin;
console.log(booleanResponse); // Logs false. if it was a reference to the same object, it would've logged true since it would've been updated on both occasions.

let secondCheck = admin.name === hackerman.name;
console.log(secondCheck); // Logs true since they are 2 references to the same object

admin.name = "WelcomeAdmin2004";

let lastCheck = admin.name === hackerman.name;
console.log(lastCheck); // Logs true again.
console.log(admin.name); // WelcomeAdmin 2004
console.log(hackerman.name); // WelcomeAdmin 2004

// Let's do a compare to the properly cloned object:

console.log(userDatabase.isAdmin); // true
console.log(clone.isAdmin); // False, since we've revoked his rights.

// Let's take a quick look at structuredClone:

let recordCollection = {
  artistName: "Michael Jackson",
  album: "Thriller",
  release: "November 29, 1982",
  songs: {
    1: "The Girl is Mine",
    2: "Billie Jean",
    3: "Beat It",
    4: "Wanna Be Startin' Somethin'",
    5: "Human Nature",
    6: "P.Y.T.",
    7: "Thriller",
  },
};

// StructuredCloning should clone an object with all nested properties.
// Our nested property in this example is found in the songs, which contains another object within the records object.

// Note that structuredClone cannot clone functions.

let cloneMyRecords = structuredClone(recordCollection);

let momentOfTruth = recordCollection.album === cloneMyRecords.album;

console.log(momentOfTruth); // True.

// Let's take out thrillers release date in the clone:

let newRelease = { release: "" };

let assignRelease = Object.assign(cloneMyRecords, newRelease);

let releaseCompare = recordCollection.release === cloneMyRecords.release;

console.log(releaseCompare); // False!
console.log(recordCollection.release); // November 29, 1982
console.log(cloneMyRecords.release); // " "

console.log(cloneMyRecords); // Shows the entire object, included nested arrays. However, releasedate is gone.
