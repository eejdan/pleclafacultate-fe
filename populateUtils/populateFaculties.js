if(require.main === module) {
    require('dotenv').config();
}
const { createHash } = require('crypto')

const { stdin, stdout } = require('process'); 
const mongoose = require('mongoose');
const FacultyType = require('../models/FacultyType');
const readline = require('node:readline').createInterface({
    input: stdin,
    output: stdout
})
var facultati = [
    "Administrarea Afacerilor",
    "Administrație Publică",
    "Administrație și Management Public",
    "Afaceri Internaționale",
    "Agricultură",
    "Agronomie",
    "Alimentatie si Turism",
    "Antreprenoriat, Ingineria și Managementul Afacerilor",
    "Arhitectura",
    "Arhitectura de Interior",
    "Arhitectura Navala",
    "Arhitectura și Urbanism",
    "Arte",
    "Asistenta Medicala",
    "Automatică și Calculatoare",
    "Autovehicule Rutiere",
    "Autovehicule și Transporturi",
    "Bioingineria Resurselor Animaliere",
    "Bioinginerie Medicala",
    "Biologie",
    "Biotehnologii",
    "Business",
    "Cai Ferate Drumuri și Poduri",
    "Calculatoare și Informatică Aplicată",
    "Chimie",
    "Chimie Industrială și Ingineria Mediului",
    "Chimie medicala",
    "Cibernetica, Statistica și Informatica Economica",
    "Compoziție, Muzicologie și Pedagogie muzicală",
    "Comunicare și Relații Internaționale",
    "Comunicare și Relații Publice",
    "Construcții",
    "Contabilitate",
    "Contabilitate și Informatica de Gestiune",
    "Controlul și Expertiza Produselor Alimentare",
    "Design",
    "Drept",
    "Ecologie ",
    "Economia Comerțului, Turismului, Serviciilor ",
    "Economie ",
    "Economie Agroalimentara si a Mediului",
    "Economie Teoretică și Aplicată",
    "Educație Fizică și Sport",
    "Educație Fizică și Sporturi Montane",
    "Electromecanică Navală",
    "Electronică",
    "Electronică, Telecomunicații și Tehnologia Informației",
    "Energetică",
    "Energetică și Tehnologii Nucleare",
    "Exploatari Forestiere",
    "Fabricație și Management Industrial",
    "Farmacie",
    "Film",
    "Filosofie ",
    "Finanțe și Bănci",
    "Finanțe, Asigurări, Bănci și Burse de Valori",
    "Fizica ",
    "Geodezie",
    "Geografie",
    "Geologie",
    "Hidrotehnică",
    "Horticultură",
    "Îmbunătăţiri Funciare şi Ingineria Mediului",
    "Informatică",
    "Informatică Economică",
    "Informatica și Științe",
    "Ingineria Informației",
    "Ingineria Instalațiilor",
    "Ingineria Materialelor ",
    "Ingineria Mecanică",
    "Ingineria Mediului ",
    "Ingineria Petrolului și Gazelor",
    "Ingineria şi Gestiunea Producţiilor Animaliere",
    "Ingineria Sistemelor Biotehnice",
    "Ingineria Transporturilor și a Traficului (ITT)",
    "Inginerie ",
    "Inginerie a Lemnului",
    "Inginerie Aerospațială",
    "Inginerie Alimentară",
    "Inginerie Chimică",
    "Inginerie Economică Industrială",
    "Inginerie Electrică",
    "Inginerie Energetică ",
    "Inginerie Industrială",
    "Inginerie Managerială",
    "Inginerie Maritimă",
    "Inginerie Mecanică ",
    "Inginerie Medicală",
    "Inginerie Tehnologica ",
    "Interpretare Muzicală",
    "Interpretare, Compoziţie şi Studii Muzicale Teoretice",
    "Istoria și Teoria Artei",
    "Istorie",
    "Istorie şi Filologie",
    "Istorie și Filosofie",
    "Istorie și Geografie",
    "Jurnalism",
    "Kinetoterapie",
    "Limbi Moderne Aplicate",
    "Litere ",
    "Management ",
    "Management Financiar",
    "Management in Producție ",
    "Management Industrial",
    "Management şi Dezvoltare Rurală",
    "Management și Turism Rural",
    "Management  în Transporturi",
    "Marketing",
    "Matematică",
    "Mecatronică",
    "Medicină",
    "Medicina Dentară",
    "Medicină și Farmacie",
    "Medicină și Științe Biologice",
    "Medicină Veterinară",
    "Mediu",
    "Mine",
    "Moașe și Asistente Medicale",
    "Muzică",
    "Navigație și Transport Naval",
    "Pregatirea Personalului Didactic",
    "Protecția Mediului",
    "Psihologie",
    "Psihopedagogie",
    "Relații Economice Internaționale",
    "Relații Internaționale ",
    "Relații Internaționale și Integrare Europeană",
    "Robotică",
    "SAIAPM",
    "Silvicultură",
    "Sociologie",
    "Sport și Performanță Motrică",
    "Știința Calculatoarelor",
    "Stiinta si Ingineria Materialelor",
    "Științe ",
    "Ştiinţe Administrative",
    "Științe ale Educației",
    "Științe ale Naturii",
    "Științe Aplicate",
    "Științe Economice ",
    "Științe Exacte",
    "Ştiinţe Juridice",
    "Științe Medicale și Comportamentale",
    "Științe Politice",
    "Ştiinţe Sociale",
    "Ştiinţe Umaniste ",
    "Stiintele Comunicarii",
    "Stiintele Comunicarii și Relații Internaționale",
    "Studii Europene",
    "Teatru",
    "Tehnologia Construcțiilor de Mașini",
    "Tehnologia Informației",
    "Tehnologia Petrolului și Petrochimie",
    "Telecomunicații ",
    "Teologie",
    "Teologie Greco-Catolică",
    "Teologie Ortodoxă",
    "Teologie Reformată și Muzică",
    "Teologie Romano-Catolică",
    "Terapie Ocupațională",
    "Transfrontalieră",
    "Transporturi",
    "Turism ",
    "Urbanism",
    "Utilaj Tehnologic",
    "Zootehnie și Biotehnologii",
  ];

  mongoose.connect(process.env.MONGO_URI, {
    dbName: 'plecLaFacultate',
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);
facultati.forEach(async fc => {
    let newfc = new FacultyType({ displayName: fc });
    await newfc.save()
})

console.log('done');