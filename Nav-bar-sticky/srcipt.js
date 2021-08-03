let navItem=document.getElementById('nav')



window.addEventListener('scroll',function(){
if(window.pageYOffset >= 80 ){
    
    navItem.classList.add('sticky')
}else{
    navItem.classList.remove('sticky')
}

})

