//const { Console } = require('console');
 
 const fs =require('fs');
// const http =require('http');
// const url =require('url');


///////////////////////////////////////////////FILES
//Blocking, synchronous way
  
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date()}`;
 
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written');
/*
//Non-blocking, asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (err,data1) => {
    if (err) return console.log('ERROR! *');

    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err,data2) => {
       console.log(data2);
       fs.readFile('./txt/append.txt', 'utf-8', (err,data3) => {
        console.log(data3);

        fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
            console.log('Your file has been written');
        })
      });
   });
});
console.log('Will read file!'); */

/////////////////////////////////////////////////
 

 //const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);

/* const fs =require('fs');
const http =require('http');
const url =require('url');
 


const tempOverview = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');

 
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
  const dataObj = JSON.parse(data);

const server = http.createServer((req,res) => {
 //  console.log(req);  //responds in terminal 
  // console.log(req.url);

const pathName = req.url;

//Overview page

    if(pathName === '/'  || pathName === '/overview') {



      res.end('<h1>This is the OVERVIEW<h1>');

// Product Page

    } else if (pathName === '/product'){

      res.end ('<h1>Product:  This is the PRODUCT</h1>'); 

// API

    } else if (pathName === '/api') {
      res.writeHead(200, {'Content-type':'application/json'});
                res.end(data);

// Not found

    }else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello world'
        });
        res.end('<h1>Page not found!</h1>');
    }
});
 
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});

        
          */
    

