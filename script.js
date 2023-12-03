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

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");
  const closeBtn = document.querySelector(".close");
  const modalVideo = document.getElementById("video-player");
  const videoSource = document.getElementById("video-source");

  const modalTriggers = document.getElementsByClassName("modal-trigger");
  for (let i = 0; i < modalTriggers.length; i++) {
    const trigger = modalTriggers[i];
    trigger.addEventListener("click", function () {
      const video = this.getAttribute("data-video");
      videoSource.setAttribute("src", video);
      modal.style.display = "block";
      modalVideo.load();
    });
  }

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    modalVideo.pause();
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modalContent) {
      modal.style.display = "none";
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
//traductor
function changeLanguage(language) {
  var translationElement = document.getElementById("google_translate_element");

  new google.translate.TranslateElement(
    { pageLanguage: "es", autoDisplay: false },
    "google_translate_element"
  );
}

//color
document.getElementById("theme-toggle").addEventListener("click", function () {
  this.classList.toggle("active");
  var aboutMeSection = document.querySelector(".sobremi");
  var header = document.querySelector(".contenedor-header");
  var circle = document.querySelector(".inicio .contenido-banner img");
  var chart = document.querySelector(".inicio .contenido-banner");
  var section = document.querySelector(".inicio");
  var sections = document.querySelectorAll("section");

  var skillElements = document.querySelectorAll(".skills");
  var curriculumHeadings = document.querySelectorAll(".curriculum h2");
  var curriculumElements = document.querySelectorAll(".curriculum");
  var curriculumItems = document.querySelectorAll(".curriculum .fila .item");
  var casaElements = document.querySelectorAll(".curriculum .fila .item .casa");

  //
  var barraSkillElements = document.querySelectorAll(".skill .barra-skill");
  var portfolioSection = document.getElementById("portfolio");

  // Change the background color of the 'portfolio' section

  //
  var interestElements = document.querySelectorAll(
    ".contenedor-intereses .interes"
  );

  //noche
  if (this.classList.contains("active")) {
    sections.forEach(function (section) {
      // Change color of h1 and h2 within each section
      var h1 = section.querySelector("h1");
      var h2 = section.querySelector("h2");
      if (h1) h1.style.color = "white";
      if (h2) h2.style.color = "white";

      // Change color of links in '.redes' within each section
      var socialLinks = section.querySelectorAll(".redes a");
      socialLinks.forEach(function (link) {
        link.style.color = "white";
      });
    });
    skillElements.forEach(function (skill) {
      skill.style.background = "#252a2e";
    });
    header.style.backgroundColor = "#2c3e50";
    chart.style.background = "#1e2326";
    chart.style.boxShadow = "none";
    circle.style.border = "10px solid #254361"; // This will set the border to none
    curriculumElements.forEach(function (curriculum) {
      curriculum.style.backgroundColor = "#1e2326";
    });
    curriculumHeadings.forEach(function (h2) {
      h2.style.backgroundColor = "#252a2e";
    });
    interestElements.forEach(function (element) {
      element.style.backgroundColor = "#252a2e";
    });
    barraSkillElements.forEach(function (element) {
      // Example change: setting a background color
      element.style.backgroundColor = "#131517"; // Replace with your desired style changes
    });
    curriculumItems.forEach(function (item) {
      item.style.backgroundColor = "rgb(37, 42, 46)";
    });
    section.style.background =
      "linear-gradient(to top, rgba(30, 35, 38, 0.8), rgba(30, 35, 38, 1)), url('img/fondo.png')";
    // If the button is in the "active" state, set the background of .sobremi to dark
    aboutMeSection.style.backgroundColor = "#1e2326";
    aboutMeSection.style.color = "white";
    portfolioSection.style.backgroundColor = "#252a2e";
  } else {
    sections.forEach(function (section) {
      // Change color of h1 and h2 within each section
      var h1 = section.querySelector("h1");
      var h2 = section.querySelector("h2");
      if (h1) h1.style.color = "#0056b3";
      if (h2) h2.style.color = "#0056b3";

      // Change color of links in '.redes' within each section
      var socialLinks = section.querySelectorAll(".redes a");
      socialLinks.forEach(function (link) {
        link.style.color = "#0056b3";
      });
    });
    header.style.backgroundColor = "#0180ff";
    chart.style.background =
      "linear-gradient(to right, #82c7f0, #b9eaf8, #e0f7ff, #b9eaf8, #82c7f0)";
    chart.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
    circle.style.border = "10px solid #ffe032";

    section.style.background = "none";

    skillElements.forEach(function (skill) {
      skill.style.background =
        "linear-gradient(to top, rgb(207 207 207 / 89%), rgb(65 200 247))";
    });

    barraSkillElements.forEach(function (element) {
      // Example change: setting a background color
      element.style.backgroundColor = "#60b0ff"; // Replace with your desired style changes
    });

    interestElements.forEach(function (element) {
      element.style.backgroundColor = "#45da66";
    });
    curriculumHeadings.forEach(function (h2) {
      h2.style.backgroundColor = "#92c8f4";
    });
    curriculumElements.forEach(function (curriculum) {
      curriculum.style.backgroundColor = "#27cbf4";
    });
    curriculumItems.forEach(function (item) {
      item.style.backgroundColor = "#92c8f4";
    });
    casaElements.forEach(function (casa) {
      casa.style.color = "#007fff";
    });
    portfolioSection.style.backgroundColor = "rgb(229, 234, 255)";
    // If the button is not in the "active" state, set the background of .sobremi to white
    aboutMeSection.style.backgroundColor = "#e5eaff";
    aboutMeSection.style.color = "#1e2326";
  }
});
