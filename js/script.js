const dataNow = new Date();
document.getElementById("datenow").innerHTML = dataNow.getFullYear();


const key1 = document.getElementById('key-1');
const key2 = document.getElementById('key-2');

key1.addEventListener('click', () => {
  document.getElementById("content-one").style.display = 'flex';
  document.getElementById("content-two").style.display = 'none';
  document.getElementById("key-1").style.background = '#0C151D';
  document.getElementById("key-2").style.background = '#171F26';
})
key2.addEventListener('click', () => {
  document.getElementById("content-two").style.display = 'flex';
  document.getElementById("content-one").style.display = 'none';
  document.getElementById("key-2").style.background = '#0C151D';
  document.getElementById("key-1").style.background = '#171F26';
}) 

const sabSoc = document.getElementById('contact-push');

sabSoc.addEventListener('click', () => {
  document.getElementById("sub-soc").style.display = 'flex';
})


const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})