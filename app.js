const express = require('express');
const server = express();
const upload = require('multer')();

server.set('view engine', 'ejs');
server.set('views', './views');

//server.use(express.static('./public'));

server.use(express.json());
//server.use(express.urlencoded({ extended: false }));

server.get('/', (req, res) => {
    //res.json({ status: 'ok' });
    res.render('main');
});

server.post('/test', upload.none(), (req, res) => {
        
    const obj = req.body;
    console.log('Наш объект:', obj); // { bio: { work: 'ingener', status: 'busy' } }
    const key1 = Object.keys(obj); 
    console.log('Первичный ключ:', Object.keys(obj)); // [ 'bio' ]
    console.log('Первичный ключ текстом:', key1[0]); // bio
    const obj2 = Object.values(obj)[0]; 
    console.log('Вторичные ключи объектом:', obj2); // { work: 'ingener', status: 'busy' }
    const key2 = Object.keys(obj2); 
    console.log('Вторичные ключи названиями:', key2[0], key2[1]); // work status
    const val2 = Object.values(obj2);
    console.log('Значения внутренних ключей:', val2[0], val2[1]); // ingener busy
          
//     if(obj.keys(data.bio).includes('work')) {
//         console.log('ключ имя есть');
//    };
    res.end();
});



// const obj = {
//             bio: {
//                 name: 'Alex', //String
//                 surname: 'Borz' //String
//             }
//         }

server.listen(3000);