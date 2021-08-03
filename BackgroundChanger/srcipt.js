const bg=document.getElementById('conatiner')
const btn=document.getElementById('btn')

let colors=[
    'red','blue','black','white','yellow','teal'

]

function colorChange(){

    let index=0
    
    btn.addEventListener('click' ,function(){
        if(index > colors.length){
            index=0
        }
        bg.style.backgroundColor=colors[index]
        index++
    })
    
    return index
      
    

}
colorChange()