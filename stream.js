const fs = require('fs');
const path = require('path')

// const data = path.join(__dirname,'files','lorem.txt');
// console.log(data)

const rs = fs.createReadStream(path.join(__dirname,'files','lorem.txt'),'utf8');
const ws = fs.createWriteStream(path.join(__dirname,'files','new-lorem.txt'));


// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

rs.pipe(ws);