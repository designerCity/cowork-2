const express = require('express')

const app = express();
const path = require('path');
//  아래 세 줄을 추가해야 ajax 가 잘된다.
app.use(express.json());
var cors = require('cors');
app.use(cors());


// delete 를 사용할 때, const 상수로 지정하면 에러가 뜬다.
// let members = require('./members') // 직원 정보 배열을 가지고 있었던 코드
const db = require('./models/index'); // /index 를 빼도, 알아서 찾는다. db 객체를 가져오고
const member = require('./models/member');
const { Member } = db; // db 객체의 Member Model 를 꺼낸다.

// public 폴더를 정적 파일 디렉토리로 지정
// app.use(express.static('public'));
// middleware : server 로 부터 오는 req 에 관해 필요한 것을 처리해준다.
app.use(express.json()); // server 로 부터온 req 의 body 에 json 이 존재할 경우에 그것을 추출해서 req.body 프로퍼티의 값으로 지정해 주는 것이다. 

// index.html 에서 form 을 통해 전송된 데이터를 받아서 처리하는 코드
app.post('/public', (req, res) => {
    const { name, age } = req.body;
    res.send({ name, age });
});

app.get('/public', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// index.html 의 마지막 부분에서 ajax 를 통해 전송된 데이터를 받아서 처리하는 코드. 변수를 다르게 지정해야 한다.
app.post('/public/ajax', (req, res) => {
    const { name, age } = req.body;
    res.send({ name, age });
});
// index.html 의 마지막 부분에서 ajax 를 통해 전송된 데이터를 받아서 서버로 전송하는 코드
app.get('/public/ajax', (req, res) => {
    res.sendFile(__dirname + '/public/ajax.html');
});

// 서버가 실행되면, db 객체의 Member Model 을 통해 db 에 접근할 수 있다.
// db 에 접근할 수 있게 되면, db 에 저장된 데이터를 가져올 수 있다.
// db 에 저장된 데이터를 가져오는 방법은 2가지가 있다.
    // 1. findAll() : db 에 저장된 모든 데이터를 가져온다.
    // 2. findOne() : db 에 저장된 데이터 중에서 조건에 맞는 데이터를 가져온다.
// findAll() 을 사용해서 db 에 저장된 모든 데이터를 가져오는 코드
// app.get('/members', async (req, res) => {
//     const members = await Member.findAll();
//     res.send(members);
// });

// // findAll() 을 사용해서 db 에 저장된 데이터를 csv 형식으로 가져오고, 저장하는 코드
// app.get('/members/csv', async (req, res) => {
//     const members = await Member.findAll();
//     let csv = 'id, name, age, mbti, createdAt, updatedAt\n';
//     members.forEach(member => {
//         csv += `${member.id}, ${member.name}, ${member.age}, ${member.mbti}, ${member.createdAt}, ${member.updatedAt}\n`;
//     });
//     res.send(csv);
// });


// findOne() 을 사용해서 db 에 저장된 데이터 중에서 mbti I로 시작하는 데이터를 가져오는 코드

app.listen(3000, () => {
    console.log('Sever is listening...')
}); // 포트 번호 3000

// 특정 폴더의 파일을 전송하기 위한 코드
app.use(express.static(path.join(__dirname, 'uoscity/build')));

// react build 로 만든 index.html 을 보여주는 코드
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'uoscity/build/index.html'));
})
//  DB 데이터 어떻게 리엑트에서 보여줌 ?
app.get('/example   ', function(req, res) {
    res.json({name: 'example'})
})

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'uoscity/build/index.html'));
});