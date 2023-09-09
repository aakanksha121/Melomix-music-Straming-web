// let the rhythm move you
// feel the beat live the music


// login popup window
document.getElementById('signIn').addEventListener('click',()=>{
  document.querySelector('.popup').style.display="flex"; 
})

document.getElementById('close-popup').addEventListener('click',()=>{
  document.querySelector('.popup').style.display="none"; 
})


// login form style

const formcontainer=document.querySelector('.form-container');
const loginLink=document.querySelector('.signInLink');
const registerLink=document.querySelector('.signUpLink');

registerLink.addEventListener('click',()=>{
  formcontainer.classList.add('active');
})

loginLink.addEventListener('click',()=>{
  formcontainer.classList.remove('active');
})



document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  window.location.href = "/Melomix-music-Straming-web/Music App/musicApp.html"; 
});

document.getElementById("signUpForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  window.location.href = "/Melomix-music-Straming-web/Music App/musicApp.html"; 
});
