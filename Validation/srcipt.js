const inputPass = document.querySelector("#inputPass");
const inputUser = document.querySelector("#inputUser");

const btn = document.querySelector("button");

let flag = 1;
btn.addEventListener("click",Validation);

function Validation() {
  if (inputUser.value == "" || inputUser.value.length < 3) {
    document.getElementById("username").innerText = " User name must Be Valid";
    flag = 0;
  } else {
    document.getElementById("username").innerText = "";
    flag = 1;
  }
  if (inputPass.value == "" || inputPass.value.length < 8) {
    document.getElementById("password").innerText = " Password must Be Valid";
    flag = 0;
  } else {
    document.getElementById("password").innerText = "";
    flag = 1;
  }
  if(flag){
      console.log('1')
      inputPass.value=""
      inputUser.value=""
      document.getElementById('h1').innerText='Congrats U Done Validation'
  }else{
      document.getElementById('h1').innerText='Incorect Inputs'
      console.log('2');
  }
}
