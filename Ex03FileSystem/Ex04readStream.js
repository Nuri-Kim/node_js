const fs = require('fs');

// 버퍼 -> 스트림 : 버퍼의 크기를 작게 만든 후 여러번 나눠 보내는 방식

                                    //버퍼 크기 지정( 기본값 : 64 )
const readStream = fs.createReadStream('./readme.txt',{highWaterMark : 16});

const data = []; //데이터를 담음

readStream.on('data', (chunk)=>{ // chuck -> 데이터의 부분
    data.push(chunk) .toExponential //data 배열에 chunk 데이터 넣기

})
//파일을 다 읽으면 발생
readStream.on('end',()=>{
    console.log(Buffer.concat(data).toString)
})