//menuliskan stirng ke file (synchronous)
// fs.writeFileSync('test.txt', 'Hello world secara synchronous');

// menuliskan string ke file (asynchronous)
// fs.writeFile('test.txt', 'hello world secara asynchronous', (e) => {
//     console.log(e);
// })

//membaca isi file (synchronous)
// const data = fs.readFileSync('test.txt', 'utf8');
// console.log(data);

// membaca isi file (asynchronous)
// fs.readFile('test.txt', 'utf8', (e, data) =>{
//     if (e) throw e;
//     console.log(data);
// })

/////////////////////////////////////////////////////////////////

const contacts = require('./contacts');

// membuat fungsi untuk menulis pertannyaan dengan asyn await
const main = async()=>{
    const nama = await contacts.tulisPertanyaan('Masukan nama anda : ');
    const email = await contacts.tulisPertanyaan('Masukan email anda :');
    const hp = await contacts.tulisPertanyaan('Masukan No hp anda :');

    contacts.simpanContact(nama, email, hp);
}
main();







// rl.question('Masukan nama anda : ', (nama) =>{
//     rl.question('Masukan nomer hp anda : ', (hp) =>{
//     const contact = {nama, hp};
    
//     // membaca string dari pertanyaan
//     const file = fs.readFileSync('data/contacts.json', 'utf-8');

//     // mengubah ke dalam bentuk json
//     const contacts = JSON.parse(file);
    
//     // memasukan file json ke dalam contact
//     contacts.push(contact);
    
//     // menuliskan semua data yg di input ke dalam file json
//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); // mengubah data json ke string
    
//     console.log('Terima kasih sudah mengisi data');
//     rl.close();
//     });
// });


