const width = document.getElementById('width')
const height = document.getElementById('height')
const enterBtn = document.getElementById('enter')
const box = document.querySelector('.box')

enterBtn.addEventListener('click',()=>{
    box.style.width=width.value +'px';
    console.log('hello')
    box.style.height = height.value + 'px';
})