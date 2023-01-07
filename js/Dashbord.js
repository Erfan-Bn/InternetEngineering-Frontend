function fun1(){
    let name = "ali";
    let last_name = "amiri";
    let email = "text@info.com";
    let phone ="+98"+"9123659872";
    let text = `
    name : ${name} <br>
    Last name : ${last_name} <br>
    Email : ${email} <br>
    Phone number : ${phone} <br>
    `;  
    document.getElementsByClassName('box')[0].innerHTML=text;
}
function fun2(){
    text = "Error 503  <br>  No ticket found!";
    document.getElementsByClassName('box')[0].innerHTML=text;
}
function fun3(){
    let text = `
    <label> Enter old password: </label> <br>
    <input type="password" ><br>
    <label> Enter new password: </label> <br>
    <input type="password" ><br>
    <label> Re-type new password: </label> <br>
    <input type="password" ><br>
    <button type="submit">Submit</button>
    `;
    document.getElementsByClassName('box')[0].innerHTML=text;
}
