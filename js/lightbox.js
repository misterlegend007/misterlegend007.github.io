const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelectorAll('.agregar-imagenes')
const contenedorLight = document.querySelectorAll('.imagen-light')


imagenes.forEach(imagen =>{
    imagen.addEvenListener('click', ()=>{
      aparecerImagen(imagen.getAttribute('src'))
    })
})


const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
}
