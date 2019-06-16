import locationData from './test_locationdata.json';
module.exports = {
  getNearList,
  getAll,
  searchPlace,
};

const KILO = 0.0090133729745762;

function getNearList({latitude, longitude, latitudeDelta, longitudeDelta}){
  return locationData.filter(v=>
    Number(v.latitude) >= latitude-latitudeDelta && Number(v.latitude) <= latitude+latitudeDelta &&
    Number(v.longitude) >= longitude-longitudeDelta && Number(v.longitude) <= longitude+longitudeDelta
  );
}
function getAll(){
  return locationData;
}



// テキストから場所を検索
async function searchPlace({text}){
  const results = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyD0YYo4umoElOBdxK6AItAKuML7fZtmWW8`+
    `&input=${encodeURIComponent(text)}`
  );
  const resultJson = await results.json();
  return resultJson.predictions.map(obj=>{
    return {
      text: obj.structured_formatting.main_text,
      secondary_text: obj.structured_formatting.secondary_text
    };
  });
}
