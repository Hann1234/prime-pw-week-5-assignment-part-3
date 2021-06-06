console.log('***** Music Collection *****')

let collection = [];
console.log('My collection is:', collection);

function addToCollection(title, artist, yearPublished) {
  let cd = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(cd);
  return cd;
}

console.log('I am adding Stadium Arcadium by RHCP from 2006:', addToCollection('Stadium Arcadium', 'RHCP', '2006'));
console.log('I am adding Californication by RHCP from 1999:', addToCollection('Californication', 'RHCP', '1999'));
console.log('I am adding Abbey Road by The Beatles from 1969:', addToCollection('Abbey Road', 'The Beatles', '1969'));
console.log('I am adding Let it Be by The Beatles from 1970:', addToCollection('Let it Be', 'The Beatles', '1970'));
console.log('I am adding Lateralus by Tool from 2001:', addToCollection('Lateralus', 'Tool', '2001'));
console.log('I am adding Reflektor by Arcade Fire from 2013:', addToCollection('Reflektor', 'Arcade Fire', '2013'));

console.log('My collection is:', collection);

function showCollection(array) {
  console.log('The number of items in the array is:', array.length);
  for (let object of array) {
    console.log('TITLE:', object.title);
    console.log('ARTIST:', object.artist);
    console.log('YEAR:', object.yearPublished);
  }
  return 'This is my collection.'; //I added this return because if I dont I get "undefined" when I log it out in console. Is there a better way to avoid getting undefined?
}

console.log('Test - showCollection:', showCollection(collection));

/* function findByArtist(artist) {
  let results = [];
  for (let object of collection) {
    if (object.artist === artist) {
      results.push(object);
    }
      return results;
  }
}
This only added one object to the array... how can i use a for of loop to solve this?
*/

function findByArtist(artist) {
  let results = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      results.push(collection[i]);
      console.log(`Yes, ${artist} is in the collection.`); //how come this logs out before the log from the test log logs out? if that makes sense lol I get "Yes, _____ is in the collection" then "Is _____ in my collection?" Just wondering if we can have whats in the function log out after the test log.
    }
  }
  return results;
}

console.log('Is RHCP in my collection?', findByArtist('RHCP'));
console.log('Is Tool in my collection?', findByArtist('Tool'));
console.log('Is Father John Misty in my collection?', findByArtist('Father John Misty'));
