const express = require('express');
const router = express.Router();

// 세션 생성
router.get('/setsession',(req,res)=>{
    
    // req.session.key값 = 세션에 담아줄 값
    req.session.nickname = '닉네임';
    req.session.today = 'today';

    res.send('세션생성');
})

// 세션 값 확인
router.get('/getsession', (req,res)=>{
    // res.send('닉네임 : '+req.session.nickname);
    res.send('투데이 : '+req.session.today);
})

// 세션 삭제
router.get('/deletesession', (req,res)=>{
    req.session.destroy();
    //req.session.today =''; => 하나만 삭제
    res.send('세션삭제')
})

module.exports = router;