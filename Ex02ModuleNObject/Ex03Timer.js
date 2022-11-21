//serTimeOut : n초 후 실행

const timeOut = setTimeout(()=>{
   console.log('1.5초 후 실행');
},1500)

// setInterval : n초 간격으로 실행

const interval = setInterval(()=>{
    console.log('2초마다 실행');
},2000);

const timeOut2 = setTimeout(()=>{
    console.log('실행되지 않습니다');
 },3000);


setTimeout(()=>{
    clearTimeout(timeOut2); //생성한 timeOut 삭제
        clearInterval(interval); //생성한 interval 삭제
},2500);

const immediate = setImmediate(()=>{
    console.log('즉시 실행')
})

clearImmediate(immediate); //생성한 immediate 삭제