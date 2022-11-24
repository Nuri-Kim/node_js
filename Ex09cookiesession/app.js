const express = require('express');
const app = express();
const cookieRouter = require('./routes/cookie');
const sessionRouter = require('./routes/session');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const filestore = require('session-file-store')(session);

app.set('port',process.env.PORT || 8888);

app.use(cookieParser()) //쿠키 값 불러오는 모듈

app.use(session({
    httpOnly : true, // http 요청으로 온 요청만 처리
    resave : false, // 세션을 언제나 저장할지 설정
    secret : 'secret key', // 암호화에 쓰이는 키
    store : new filestore()
}));

app.use('/c',cookieRouter);

app.use('/s',sessionRouter)
 

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버 연결 대기중...');
});