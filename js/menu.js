const active = document.querySelector('.active');
const home = document.querySelector('.home');

console.log(active)
console.loge(home)


active.addEvenListener('click', ()=>{
      active.classList.toggle("spread")
})
