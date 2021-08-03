let flag=0
function change(x){
flag=flag+x;
changeSlider(flag)
}
changeSlider(flag)
function changeSlider(num){
    const slider=document.querySelectorAll('.slider')
    if(num == slider.length){
        flag=0
        num=0;
    }
    if(num < 0){
        flag=slider.length-1
        num=slider.length-1
    }
    console.log(slider);
   for(let i of slider){
        i.style.display="none"
    }
    slider[num].style.display="block"

}
