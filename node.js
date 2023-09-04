let ages = [10,20,30,40]

function calc(...x){
    if(x.length == 0) return;
    
    let sum = 0;
    for(i=0; i < x.length; i++){
        sum += x[i]
    }
    let avg = sum / x.length;
    console.log(avg)
    
}

calc(...ages)
calc(20, 30, 40)
calc(20)
calc()
