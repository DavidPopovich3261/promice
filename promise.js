function getHello(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
           res("hello") 
        }, 500);}
    )
}
// getHello().then((res)=>{console.log(
//  res)})



function addAsync(a,b){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(a+b)
        },1000)
    })
}
// addAsync(5,7).then(res=>console.log(res))


function checkNumber(n){
    return new Promise((res,rej)=>{
        if(!(n % 2)){
            res("Even")
        }else{
            rej("Odd number not allowed")}
    })
}

// checkNumber(4).then(res=>console.log(res)).
// catch(rej=>console.log(rej))
// checkNumber(5).then(res=>console.log(res)).
// catch(rej=>console.log(rej))


function login(username, password,time){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            if(username == "admin" && password == "1234"){
                res("Login successful")
            }else{
                rej("Invalid credentials")
            }
        }, time);
    })
}
// login('admin','1234',2000).
// then(res=>console.log(res)).
// catch(rej=>console.log(rej))

// login('admin','11111',1000).
// then(res=>console.log(res)).
// catch(rej=>console.log(rej))
