const fs = require('fs');
const Device = {
    Id: 1,
    Name: "guru ji",
    Price: 100,
    Quantity: 10,
    channels: "youtube",
    age: 21
}

// console.log(Device.Id);

//  convert object to json
const jsonData = JSON.stringify(Device);
console.log(jsonData);


// convert json to object
const jsonObj = JSON.parse(jsonData);
console.log(jsonObj);

// create file and append json data another file
fs.writeFile('device.json', jsonData, (err) => {
    console.log("file created");
    console.log(err);
})

fs.readFile('device.json', 'utf8', (err, data) => {
    console.log(data);
    console.log(err);
})