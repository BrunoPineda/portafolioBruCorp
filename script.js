let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("noventa");
        habilidades[1].classList.add("noventa");
        habilidades[2].classList.add("sesenta");
        habilidades[3].classList.add("ochenta");
        habilidades[4].classList.add("setentaycinco");
        habilidades[5].classList.add("ochenta");
        habilidades[6].classList.add("sesenta");
        habilidades[7].classList.add("sesenta");
        habilidades[8].classList.add("sesenta");
        habilidades[9].classList.add("sesenta");
        habilidades[10].classList.add("setentaycinco");
        habilidades[11].classList.add("javascript");
        habilidades[12].classList.add("creatividad");
        habilidades[13].classList.add("javascript");
        habilidades[14].classList.add("drupal");
        habilidades[15].classList.add("creatividad");
        habilidades[16].classList.add("javascript");
        habilidades[17].classList.add("ochenta");
        habilidades[18].classList.add("ochenta");
        habilidades[19].classList.add("ochenta");
        habilidades[20].classList.add("ochenta");
        habilidades[21].classList.add("setenta");
        habilidades[22].classList.add("creatividad");
        habilidades[23].classList.add("setenta");
        habilidades[24].classList.add("creatividad");

    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Enviado con exito';

        const serviceID = 'default_service';
        const templateID = 'template_542r755';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });