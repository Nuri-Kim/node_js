const express = require('express');
const router = express.Router();
const db_config = require("../config/database");

let conn = db_config.init();
db_config.connect(conn);

router.get('/select', (req, res)=>{
    let sql = 'select * from member';

    conn.query(sql,function(err,rows,fields){
        //console.log('rows->',rows); // 영향을 받은 row에 대한 정보
        //console.log('fields->',fields); // row의 자세한 메타데이터

        if(err){ // 실패
            console.error('insert 실행 실패 -> ',err);
        }else{ // 성공
            res.render('index',{list : rows});
        }

    })

})


router.post('/insert',(req,res)=>{
    let {id,pw,nick} = req.body;

    let sql ='insert into member values(?,?,?);'

    conn.query(sql,[id,pw,nick], function(err, rows, fields){
        //console.log('rows->',rows); // 영향을 받은 row에 대한 정보
        //console.log('fields->',fields); // row의 자세한 메타데이터

        if(err){ // 실패
            console.error('insert 실행 실패 -> ',err);
        }else{ // 성공
            res.redirect('/select');
        }
    });

});

// 특정회원 정보만 조회하기
router.get("/select/:id", (req, res) => {
    let id = req.params.id;
  
    let sql = "select * from member where id = ?";
    conn.query(sql, [id], function (err, rows, fields) {
      console.log(rows);
      console.log(fields);
  
      if (err) {
        console.error("select 실행 실패 : " + err);
      } else {
        // json형태로 응답
        res.json({ listOne: rows });
      }
    });
  });

  // 회원 삭제하기
  router.get("/delete/:id",(req, res)=>{
    let id = req.params.id;
    let sql = "delete from member where id = ?";
    conn.query(sql, [id], function (err, rows, fields) {
        console.log(rows);
        console.log(fields);
    
        if (err) {
          console.error("삭제 실패 : " + err);
        }else{
            res.redirect('/select');
        }
      });
  })
  router.post("/update",(req,res)=>{
    let {id,pw,nick} = req.body;
    

    let sql = "update member set pw =?,nick =? where id = ?";

    conn.query(sql, [pw,nick,id], function (err, rows, fields) {
        console.log(rows);
        console.log(fields);
    
        if (err) {
          console.error("수정 실패 : " + err);
        }else{
            res.redirect('/select');
        }
  });
});

   
  

module.exports = router;