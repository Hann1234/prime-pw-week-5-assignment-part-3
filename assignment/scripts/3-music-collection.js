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
  return 'This is my collection.';
}

console.log('Test - showCollection:', showCollection(collection));
