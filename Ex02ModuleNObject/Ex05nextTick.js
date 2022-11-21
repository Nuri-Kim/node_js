setImmediate(()=>{ //3번째로 출력 (즉시 실행하고 싶을 때 권장하는 함수)
    console.log('immediate!')
});

setTimeout(()=>{ //2번째로 출력 (빠르긴 하지만 즉시 실행하는 목적에 맞지 않는 기능)
    console.log('timeout')
},0);

process.nextTick(()=>{ //1. 이벤트루프가 다른 함수보다 우선으로 처리하게끔 만드는 기능
    console.log('nextTick');
})