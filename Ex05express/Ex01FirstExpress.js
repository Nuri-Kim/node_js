const express = require('express')
const app = express();  //app생성

// get : get 요청 받음
app.get('/',(req,res)=>{ //root로 get 요청시
    res.send('Hello World!'); //작성한 텍스트 응답
});

app.listen(8888,()=>{
    console.log('8888 포트에서 서버 연결 대기중...')
})