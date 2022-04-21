// core module
// file system
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

// memproses melalui cmd
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

// membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// membuat file contact json jika belum ada
const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
} 

// membuat pertanyaan di dalam promise
const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, rejects) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        })
    })
}

const simpanContact = (nama, email, hp) =>{
    const contact = {nama, email, hp};
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log('Terima kasih sudah mengisi data');
    rl.close();
}

module.exports = {tulisPertanyaan, simpanContact};