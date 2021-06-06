console.log('***** Music Collection *****')

let collection = [];
console.log(`My collection is: ${collection}`);

function addToCollection(title, artist, yearPublished) {
  let cd = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(cd);
  return cd;
}
