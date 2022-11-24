const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const indexRouter = require('./routes');
const bodyParser = require('body-parser');


app.set('port',process.env.PORT || 8888);
app.set('view engine', 'html'); 

nunjucks.configure('views',{
    express : app,
    watch : true,
});

app.use(bodyParser.urlencoded({extended:true}));
app.use('/', indexRouter);

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버 연결 대기중...');
});