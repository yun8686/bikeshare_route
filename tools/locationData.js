import locationData from './test_locationdata.json';
module.exports = {
  getNearList,
  getAll,
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
