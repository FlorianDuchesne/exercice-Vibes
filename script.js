document.querySelector("#burger").addEventListener("click", function () {
  if (document.querySelector("nav").classList.contains("navburger")) {
    document.querySelector("nav").classList.remove("navburger");
  } else {
    document.querySelector("nav").classList.add("navburger");
  }
});

const boutons = document.querySelectorAll(".collapse");
for (let bouton of boutons) {
  bouton.addEventListener("click", function () {
    console.log(this);
    if (this.classList.contains("fa-minus")) {
      this.classList.remove("fa-minus");
      this.classList.add("fa-plus");
    } else {
      this.classList.remove("fa-plus");
      this.classList.add("fa-minus");
    }
    if (this.nextElementSibling.classList.contains("hidden")) {
      this.nextElementSibling.classList.remove("hidden");
    } else {
      this.nextElementSibling.classList.add("hidden");
    }
  });
}

const figures = document.querySelectorAll("#portfolio figure");
// je rassemble toutes les figures dans une constante
for (var figure of figures) {
  // pour CHAQUE figure de cette constante…
  figure.addEventListener("click", function () {
    // au clic de la figure
    lightbox(this);
    // je déclenche la fonction lightbox
  });
}

function lightbox(elem) {
  var currentImage = elem;
  // la figure ayant déclenché la fonction, et qui est l'objet de la fonction, est stockée dans la var "currentImage"
  var src = currentImage.children[0].src;
  // l'élément ( = src) de l'élément qui est le premier enfant de ma figure ( = img) est stocké dans la var "src"
  document.getElementById("lightbox").style.opacity = 1;
  document.getElementById("lightbox").style.zIndex = 100;
  // j' "allume" la lightbox
  document.getElementById(
    "lightbox"
  ).children[2].innerHTML = `<img src="${src}"/>`;
  // Dans le troisième enfant de #lightbox, je rajoute ma var "src" à l'intérieur d'une balise img rajoutée dans l'HTML, sur js
  document.querySelector("#croix").addEventListener("click", function () {
    closeLightbox(this);
  });
  // Quand je clique sur la croix, j'ouvre la fonction de fermeture de la lightbox

  document.querySelector("#left").addEventListener("click", function () {
    // lorsque je clique sur la flèche de gauche, j'active la fonction au clic
    document.getElementById("lightbox").children[2].innerHTML = ``;
    // j'efface le inner html de la lightbox
    prevImage = currentImage.previousElementSibling;
    // j'invente la variable prevImage : c'est l'image précédente de la currentImage.
    if (prevImage === null) {
      prevImage = currentImage.parentElement.lastElementChild;
      // si l'image précédente n'existe pas, je définis l'image précédente comme la dernière figure du parent.
    }
    while (prevImage.style.display === "none") {
      // Tant que l'image précédente n'est pas en display,
      currentImage = prevImage;
      // je définis la currentImage à partir de la var prevImage
      prevImage = currentImage.previousElementSibling;
      // je définis la var prevImage à partir de l'élément parent qui précède la currentImage dans le DOM
      if (prevImage === null) {
        // Si l'image précédente n'existe pas
        prevImage = currentImage.parentElement.firstElementChild;
        // je définis la var prevImage comme le premier élément du parent de la currentImage
      }
    }
    src = prevImage.children[0].src;
    // la variable src est définie comme l'élément src enfant de ma variable prevImage
    document.getElementById(
      "lightbox"
    ).children[2].innerHTML = `<img src="${src}"/>`;
    // le troisème enfant de #lightbox se voit affecter d'une balise img chargée de ma variable src
    currentImage = prevImage;
    // la currentImage se définit à partir de prevImage
  });

  // Ci-dessous, même chose que ci-dessus mais dans l'autre sens…
  document.querySelector("#right").addEventListener("click", function () {
    document.getElementById("lightbox").children[2].innerHTML = ``;
    nextImage = currentImage.nextElementSibling;
    if (nextImage === null) {
      nextImage = currentImage.parentElement.firstElementChild;
    }
    while (nextImage.style.display === "none") {
      currentImage = nextImage;
      nextImage = currentImage.nextElementSibling;
      if (nextImage === null) {
        nextImage = currentImage.parentElement.firstElementChild;
      }
    }
    src = nextImage.children[0].src;
    document.getElementById(
      "lightbox"
    ).children[2].innerHTML = `<img src="${src}"/>`;
    currentImage = nextImage;
  });
}

function closeLightbox(elem) {
  document.getElementById("lightbox").style.opacity = 0;
  document.getElementById("lightbox").style.zIndex = -1;
  // je "ferme" la lightbox
}

document.querySelector("#image").addEventListener("click", function () {
  // Lorsque l'élément portant l'id image est cliqué, activation de la fonction qui suit
  for (figure of figures) {
    // Pour chaque figure parmi toutes les figures de la CONSTANTE créée plus tôt !
    if (figure.classList.contains("image")) {
      // Si la figure contient la classe "image"
      figure.style.display = "block";
      // la displayer
    } else {
      figure.style.display = "none";
      // sinon, ne pas la displayer
    }
  }
});

// idem ci-dessous

document.querySelector("#video").addEventListener("click", function () {
  for (figure of figures) {
    if (figure.classList.contains("video")) {
      figure.style.display = "block";
    } else {
      figure.style.display = "none";
    }
  }
});

document.querySelector("#audio").addEventListener("click", function () {
  for (figure of figures) {
    if (figure.classList.contains("audio")) {
      figure.style.display = "block";
    } else {
      figure.style.display = "none";
    }
  }
});

document.querySelector("#all").addEventListener("click", function () {
  loadAll(this);
});

document
  .querySelector("#portfolio .bouton")
  .addEventListener("click", function () {
    loadAll(this);
  });

// quand on clique sur l'élément portant le id all, ou quand on clique sur l'élément portant la classe bouton dans la section #portfolio, activer fonction suivante

function loadAll(elem) {
  for (figure of figures) {
    if (figure.classList.contains("all")) {
      figure.style.display = "block";
    } else {
      figure.style.display = "none";
    }
  }
}

// pour chaque figure de la la constante figures, si la figure contient la classe all, la displayer, sinon ne pas la displayer
