if(require.main === module) {
    require('dotenv').config();
}
const { createHash } = require('crypto')

const { stdin, stdout } = require('process'); 
const mongoose = require('mongoose');
const DomainType = require('../models/DomainType');
const readline = require('node:readline').createInterface({
    input: stdin,
    output: stdout
})
var domains = [
    "Arte",
    "Arhitectura",
    "Business",
    "IT",
    "Inginerie",
    "Medicina",
    "Științe Umaniste",
    "Științe Juridice",
    "Științe ale Naturii",
    "Științe Economice",
    "Teologie",
    "Sport",
    "Construcții",
  ];

  mongoose.connect(process.env.MONGO_URI, {
    dbName: 'plecLaFacultate',
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);
domains.forEach(async fc => {
    let newfc = new DomainType({ displayName: fc });
    await newfc.save();
})

console.log('done');