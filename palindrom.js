 let str="naman"
let N=str.length
{

let bag="";
    for(let i=N-1;i>=0;i--){
        bag=bag+str[i]
    }
    // console.log(bag)
    if(bag==str){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
  
}