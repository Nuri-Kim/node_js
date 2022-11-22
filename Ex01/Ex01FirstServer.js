const ex = require('express');
const http = require('http');

http.createServer((req, res)=>{

    // .listen(포트번호 지정,()=>{ 서버 연결하는 동안 시행할 함수 })
}).listen(8888,()=>{
    console.log('8888 포트에서 서버 연결 중...');
});