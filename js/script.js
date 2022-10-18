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
