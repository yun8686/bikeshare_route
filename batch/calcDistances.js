const googleMap = require('../apis/googlemap')();
const locationdata = require('../tools/test_locationdata.json');
const fs = require('fs');

function doDirections(a,b){
  return googleMap.directions({
    origin: [a.latitude,a.longitude],
    destination: [b.latitude,b.longitude],
    mode: "walking"
  }).asPromise();
}
(async ()=>{
  var results = [];
  var cnt = 0;
  var ans = [];
  for(var base of locationdata){
//    console.log('start', base.id);
    var nodeCount = 0;
    for(var target of locationdata){
      cnt++;
      if(base.id >= target.id) continue;
      if(getDistance(base.latitude,base.longitude, target.latitude, target.longitude) >= 8) continue;

      ans.push({
        base_id: base.id,
        target_id: target.id,
        url: `https://www.google.com/maps/dir/?api=1&travelmode=walking&origin=${base.latitude},${base.longitude}&destination=${target.latitude},${target.longitude}`
      });

      var result = {json:{routes:[{legs:0}]}};
//      var result = await doDirections(base, target);
      results.push(
        {
          start_id: base.id,
          end_id: target.id,
          legs:result.json.routes[0].legs
        }
      );
      nodeCount++;
    }
    console.log("processing", cnt + "/" + Math.pow(locationdata.length,2));
//    console.log('end', base.id, nodeCount);
  }
  fs.writeFileSync("./tools/location_url.json" , JSON.stringify(ans, null, '  '));
})().then(result=>{
  console.log("result.json", result);
});



// 地点間の直線距離 (km)
function getDistance(lat1, lng1, lat2, lng2) {
   function radians(deg){
      return deg * Math.PI / 180;
   }
   return 6378.14 * Math.acos(Math.cos(radians(lat1))*
    Math.cos(radians(lat2))*
    Math.cos(radians(lng2)-radians(lng1))+
    Math.sin(radians(lat1))*
    Math.sin(radians(lat2)));
}
