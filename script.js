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
//CARRSUEL
consoleText(["POWER BI.", "NODE", "PYHTON"], "text", [
  "tomato",
  "rebeccapurple",
  "lightblue",
]);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  var visible = true;
  var con = document.getElementById("console");
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    if (visible === true) {
      con.className = "console-underscore hidden";
      visible = false;
    } else {
      con.className = "console-underscore";

      visible = true;
    }
  }, 400);
}
//videos

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('.modal-content');
  const closeBtn = document.querySelector('.close');
  const modalVideo = document.getElementById('video-player');
  const videoSource = document.getElementById('video-source');

  const modalTriggers = document.getElementsByClassName('modal-trigger');
  for (let i = 0; i < modalTriggers.length; i++) {
    const trigger = modalTriggers[i];
    trigger.addEventListener('click', function() {
      const video = this.getAttribute('data-video');
      videoSource.setAttribute('src', video);
      modal.style.display = 'block';
      modalVideo.load();
    });
  }

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    modalVideo.pause();
  });

  modal.addEventListener('click', function(event) {
    if (event.target === modalContent) {
      modal.style.display = 'none';
      modalVideo.pause();
    }
  });
});

 

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
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
    habilidades[20].classList.add("creatividad");
    habilidades[21].classList.add("creatividad");
    habilidades[22].classList.add("creatividad");
    habilidades[23].classList.add("creatividad");
    habilidades[24].classList.add("creatividad");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviado con exito";

  const serviceID = "default_service";
  const templateID = "template_542r755";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
