self.onmessage = (e)=>{
    let timer = e.data;
    setInterval(()=>{
        timer = timer-1000
    },1000)   
    postMessage(timer);
}