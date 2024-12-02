// Use Haversine Formula to calculate geospatial distance more accurately.
// Use a priority queue to match customers with the closest drivers.
// Real-Time Tracking:
// Use WebSockets or Firebase Realtime Database for live updates on driver availability.

function calculateDistance(lat1,lon1,lat2,lon2){
    const totalRadius = (val) => (val*Math.PI)/100;
    const radius = 6371;
    const dLat = totalRadius(lat2-lat1);
    const dLong = totalRadius(lon2-lon1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(totalRadius(lat1))*Math.cos(totalRadius(lat2)) *
            Math.sin(dLong/2) * Math.sin(dLong/2);
    const c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return radius*c;
}
console.log(calculateDistance(12.971598, 77.594566, 12.971599, 77.594567))