const cube = document.getElementById('animatedCube');
const optionsContainer = document.getElementById('options');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

let animatedPause = false;

/* Función que activa y reactiva el movimiento del cubo */
cube.addEventListener('click', () =>{
    console.log('Di click en el cubo');
    if (!animatedPause) {
        console.log('Animación pausada');
        cube.style.animationPlayState = 'paused';
        optionsContainer.style.display = 'flex';
        optionsContainer.style.flexDirection = 'column'; 
        animatedPause = true;
        setTimeout(() => {
            cube.style.animationPlayState = 'running';
            optionsContainer.style.display = "none";
            animatedPause = false; 
        }, 5000);
    }
})

/* Función para páginas */
option1.addEventListener('click',()=>{
    console.log('Di click en la opción 1');
    window.location.href = "../pages/twitter.html";
})

option2.addEventListener('click',()=>{
    console.log('Di click en la opción 2');
    window.location.href = "../pages/instagram.html";
})

option3.addEventListener('click',()=>{
    console.log('Di click en la opción 3');
    window.location.href = "../pages/linkedin.html";
})