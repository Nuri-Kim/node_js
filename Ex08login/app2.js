const express = require('express');
const nunjucks = require('nunjucks') // 넌적스 템플릿 엔진 사용
const loginRouter = require('./routes/login')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use('/user',loginRouter);

app.set('port',process.env.PORT || 8888);
app.set('view engine', 'html');




nunjucks.configure('views',{
    express:app,
    watch:true,
})
 

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버 연결 대기중...');
});