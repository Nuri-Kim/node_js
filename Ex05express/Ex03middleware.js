const express = require('express');
const app = express();


app.set('port',process.env.PORT || 8888)
 
app.get('/',(req,res)=>{
    res.send('hello node!'); //응답하면 끝
    next(); // 다음 미들웨어로 넘어가도록 제어
});


// 미들웨어 -> 요청과 응답 사이에 무언가를 처리해주는 함수
const myLog = function(req,res){
    console.log('LOGGED') //위 코드가 실행되지 않으면 출력 됨
}

app.use(myLog)

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버 연결 대기중...');
});