const fs = require('fs');

const read = fs.readFile('./readme.txt',(err,data)=>{
    if(err){ //에러 발생 시 예외처리
        throw err;
    }

    console.log('data 값 -->',data); //결과물은 buffer(메모리에 저장된 데이터) 형식으로 제공
    console.log('data 값 String 으로 변환 --> ',data.toString());
});
