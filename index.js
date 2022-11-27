const fsPromises = require('fs').promises;
const fs = require('fs');
const path = require('path');



const fileOps = async () => {
    try{

        const data = await fsPromises.readFile(path.join(__dirname,'files', 'starter.txt'), "utf8")
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname,'files', 'promiseWrite.txt'), data);
        await fsPromises.unlink(path.join(__dirname,'files', 'starter.txt'), data);
        await fsPromises.appendFile(path.join(__dirname,'files', 'promiseWrite.txt'), "\n\n Nice to meet you");
        await fsPromises.rename(path.join(__dirname,'files', 'promiseWrite.txt'), path.join(__dirname,'files', 'Mockingtosh.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname,'files', 'MockingTosh.txt'), "utf8")
        console.log(newData);

    }catch(err){
        console.error(err)
    }
}

fileOps();

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'),'utf8', (err, data) =>{
//         if (err) throw err;
//         console.log(data)
// })


// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Your so stupid. ', (err) => {

//     if (err) throw err;
//     console.log('Write complete')

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n stupid stupid \n Testing text ', (err) => {

//         if (err) throw err;
//         console.log('Append complete')
    
//     })

//     fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {

//         if (err) throw err;
//         console.log('Rename complete')
    
//     })

// })

// console.log('Hello...')

// //exit on uncaught errors
// process.on('uncaughtException', err => {
//     console.error(`I caught an error ${err} yehey`);
//     process.exit(1);
// })