const express = require('express');
const bodyParser = require('body-parser')
const app = express();


app.set('port',process.env.PORT || 8888)

app.use(bodyParser.urlencoded({extended:true}))


app.get('/get',(req,res)=>{
    //쿼리스트링 ?name=value&name2=value2 방식으로 전송
    let id = req.query.id;
    let pw = req.query.pw;

    res.send('id : '+id+' pw : '+pw)
})
 
app.post('/post',(req, res)=>{
    let id = req.body.id;
    let pw = req.body.pw;

    res.send('id : '+id+' pw : '+pw)
})

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 서버 연결 대기중...');
});

