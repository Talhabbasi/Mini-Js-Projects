const textArea=document.getElementById('textarea')
const char=document.getElementById('char')
const word=document.getElementById('word')



textArea.addEventListener('input',function(){
    let text=this.value;
    let char2=text.length;
    char.innerHTML=char2;
text=text.trim();
let words=text.split(" ");
const cleanData=words.filter((el)=>{
return el != "";
})
word.innerHTML=cleanData.length;
})