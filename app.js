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
    console.log('Вторичные ключи массивом', key2); // [ 'work', 'status' ]
    //или оно же будет так:
    //console.log(Object.getOwnPropertyNames(obj2)); // [ 'work', 'status' ]
    console.log('Вторичные ключи названиями:', key2[0], key2[1]); // work status
    const val2 = Object.values(obj2);
    console.log('Значения внутренних ключей:', val2[0], val2[1]); // ingener busy

    console.log('Начинаем проверку...');
    
    if (key1.length !== 1) {
        console.log('Ошибка! Количество первичных полей не соответсвует заданному!');
    } else {
        key1.forEach((Element) => {
            if ((Element !== 'bio')) {
                        console.log(Element, 'Ошибка! Неправильный первичный ключ!');
                    }
    })};
      
    if (key2.length !== 2) {
        console.log('Ошибка! Количество вторичных полей не соответсвует заданному!');
    } else {
        key2.forEach((Element) => {
            //console.log(Element);
            if ((Element !== 'work') && (Element !== 'status')) {
                        console.log(Element, 'Ошибка! Неправильные внутренние ключи!');
                    }
    })};
    

    if (typeof val2[0] !== 'string') { 
        console.log('Ошибка: поле', key2[0], 'содержит не строчное значение!'); 
    };

    if (typeof val2[1] !== 'string') { 
        console.log('Ошибка: поле', key2[1], 'содержит не строчное значение!'); 
    };

    console.log('Проверка окончена!')
          
    res.end();
});

// const obj = {
//              bio: {
//                  { work: 'ingener', status: 'busy' },
//                  { work: 'art', status: 'free' },
//                  { work: 'driver', status: 'dolboeb, age: 28 }
//              }
//          }

server.listen(3000);