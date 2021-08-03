const c=document.getElementById('cent')
const f=document.getElementById('f')



c.addEventListener('input',function(){
    
    let cent=this.value;
    
let newF=(cent * 9/5) + 32
if(!Number.isInteger()){
    newF=newF.toFixed(4)
}

f.value= newF


})
f.addEventListener('input',function(){
    
    let far=this.value;
    
let cent=(far -32) * 5/9
if(!Number.isInteger()){
    cent=cent.toFixed(2)
}

c.value= cent


})