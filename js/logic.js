function goToTop() {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
};

function closeMenu() {
  document.getElementById("basicNav").classList.remove("show");
};

function closeAccordion(id) {
  document.getElementById(id).classList.remove("show");
};

function goToDiv(id) {
  let top = document.getElementById(id).getBoundingClientRect().top + pageYOffset;
  let navbar = document.getElementById("navbar").offsetHeight;
  window.scroll({
    top: top - navbar - 3
  });
};

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
goToTop();

const goTop = document.getElementById("go-top-btn");
window.onscroll = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
};

showContact.onclick = function() {
  closeMenu();
  document.getElementById("content").innerHTML = "";
  goToDiv("content");
};

function loadContent(href) {
  fetch(href)
    .then(response => response.text())
    .then(html => {
      closeMenu();
      document.getElementById("content").innerHTML = html;
      lazyLoadInstance.update();
      goToDiv("content");
    });
};

const modal = document.getElementById("full-image");
const modalImg = document.getElementById("image");

function fullImage(e) {
  modal.style.display = "block";
  modalImg.src = e.src;
}
const span = document.getElementById("close-full");
span.onclick = function() {
  modal.style.display = "none";
}

const toggle = document.getElementById("toggle-full");
document.addEventListener('fullscreenchange', (event) => {
  if (!document.fullscreenElement) {
    toggle.innerHTML = '<span class="mdi mdi-fullscreen"></span>';
  } else {
    if (document.exitFullscreen) {
      toggle.innerHTML = '<span class="mdi mdi-fullscreen-exit"></span>';
    }
  }
});
toggle.addEventListener('click', (event) => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});
