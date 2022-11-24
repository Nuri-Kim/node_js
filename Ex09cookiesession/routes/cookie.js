const express = require('express');
const router = express.Router();


// 쿠키 설정하기
router.get('/setcookie', (req, res)=>{
    let nickname = 'null';

    res.cookie('nickname',nickname,{
        maxAge : 10000000, //밀리초단위(만료시간 정하는 것)
    });

    res.cookie('dinner','치킨',{
                            //60초* 60분 *24시간* mm초단위 변환 * 일수
        expires : new Date(Date.now() + 60*60*24*1000*365),
    })

    res.send('쿠키생성')
})

// 쿠키 확인하기
router.get('/getcookies', (req, res)=>{
    console.log(req.cookies);
    res.send(req.cookies);
})

// 쿠키 삭제하기
router.get('/deletecookies',(req, res)=>{
    res.clearCookie('dinner')
    res.send('쿠키 삭제!')
})

module.exports = router;