const packlist = [

    "Clothes",
    "Passport",
    "Money",
    "Phone",
    "Camera",
  
]

const trip = {
    destination: "Maldiverna",
    totalDays: 30,
    tripBooked: true,
    travelDate: "2026-12-20",
    hotel: "Hotel Maldives",
    packing: packlist,


}
for (const key in trip) {
    console.log(key, trip[key]);
}



for (let i = 0; i < packlist.length; i++) {
    if (packlist[i].length > 5) {
        console.log(packlist[i]);
    }
}

for (let i = 0; i < packlist.length; i++) {
    if (packlist[i] === "Money") {
        console.log("💰 Hittades på index:", i, packlist[i]);
        break;
    }
}

for (const item of packlist) {
    console.log("🚩",item);
}




console.log("Första och sista saken vi har med oss:", packlist[0], packlist[packlist.length - 1]);
console.log("Antal saker vi har med oss:", trip.packing[2]);
console.log("trip är typen:", typeof trip)
console.log("packing är typen:", typeof trip.packing)
console.log("tripBooked är typen:", typeof trip.tripBooked)



{
    //var har inte block-scope
    var x = 3
    //const & let har block-scope
    const y = 12

    x = 7
}

const y = 15

console.log("🔥 var:", x)
console.log("🌊 const:", y)

// 🏗️ Hositing

console.log("🏗️ var", z)

var z = 10

console.log("💥 var", z)


