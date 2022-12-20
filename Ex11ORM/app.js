const { request } = require('express');
const express = require('express');
const indexRouter = require('./routes'); // index Router
const { sequelize } = require('./models'); // ./models/index
const bodyParser = require('body-parser')
const app = express();
const session = require('express-session');
const fileStore = require('session-file-store')(session);


app.set('port', process.env.PORT||8888);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret : 'secret key', //암호화 시 쓰이는 키
    store : new fileStore() // 어디에 저장할지 지정
}));
app.use('/', indexRouter);

//force : 서버 실행시마다 테이블 재생성 할 것인지 아닌지 설정
//false: 초기에 생성 후 접근 없음
sequelize.sync({force:false})
            .then(()=>{
                console.log('DB연결 성공')
            })
            .catch((err)=>{
                console.error(err);
            });
app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 대기 중...')
})