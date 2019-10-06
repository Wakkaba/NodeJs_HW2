const houses = [];

exports.insertHouse = (house) => {
    
    const index = houses.length + 1
    
    houses.push({ 'id':index  ,...house});
    
    console.log(houses);
}
exports.findHousebyId = (id) => houses.find((h) => h.id === id);