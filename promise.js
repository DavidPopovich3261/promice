// function getHello(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//            res("hello") 
//         }, 500);}
//     )
// }
// getHello().then((res)=>{console.log(
//  res)})



// function addAsync(a,b){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(a+b)
//         },1000)
//     })
// }
// addAsync(5,7).then(res=>console.log(res))


function checkNumber(n){
    return new Promise((res,rej)=>{
        if(!(n % 2)){
            res("Even")
        }else{
            rej("Odd number not allowed")}
    })
}

checkNumber(4).then(res=>console.log(res)).
catch(rej=>console.log(rej))
checkNumber(5).then(res=>console.log(res)).
catch(rej=>console.log(rej))