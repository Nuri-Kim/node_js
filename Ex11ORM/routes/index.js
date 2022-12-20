//라우터
const express = require('express');
const session = require('express-session');
const res = require('express/lib/response');
const { User } = require('../models');
const router = express.Router(); //라우터 사용
const user = require('../models/user');

router.post('/insert', async (req, res, next) => {
  // id, pw, age 데이터 받기
  let { id, pw, age } = req.body;
  try {
    //데이터 삽입 시 사용하는 함수
    //user -> 삽입된 데이터 반환
    const user = await User.create({
      id: id, //컬럼이름 : 저장되는 실제값 (변수 이름)
      pw: pw,
      age: age
    });
    res.json(user); //삽입된 데이터를 그대로 응답
  } catch(err){
    next(err); // 에러처리 미들웨어
  }
}); //비동기 async()


// user 모든 값 조회(get)
router.get('/selectall',async(req,res,next)=>{
    try{
        const users = await User.findAll();
        res.json(users);
    }catch(err){
        next(err);
    }
})


// 파라미터 값으로 넘긴 아이디와 일치하는 정보 가져오기
router.get('/select/:id',async(req,res,next)=>{
    try{
        const user = await User.findOne({
            // 특정 데이터 가져오기
            attributes : ['id','age'],
            where : {id : req.params.id}
        });
        req.session.login = user;
        res.json(user);
    }catch(err){
        next(err)
    }
});

// 수정하기 : patch (data:body)
router.patch('/update',async(req,res,next)=>{
    try{
        const result = await User.update({
            // 수정할 값 지정
            pw : req.body.pw,
            age : req.body.age
        },{
            // 조건 작성하는 부분
            where :{id : req.session.login.id}
        });
        res.json(result)

    }catch(err){
        next(err);
    }
});

router.delete('/delete/:id',async(req,res,next)=>{
    try{
        const result = await User.destroy({
            where : {id :req.params.id}
        });
        res.json(result)
    }catch(err){
        next(err)
    }
})



module.exports = router;