function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
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

ourLife.onclick = function() {
  loadPosts();
  document.getElementById("content").innerHTML = "";
  document.getElementById("posts").scrollIntoView({
    behavior: 'smooth'
  });
};

showContact.onclick = function() {
  document.getElementById("contact").scrollIntoView();
};

function loadContent(href) {
  fetch(href)
    .then(response => response.text())
    .then(html => {
      document.getElementById("content").scrollIntoView();
      document.getElementById("content").innerHTML = html;
      lazyLoadInstance.update();
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
    toggle.innerHTML = '<i class="fas fa-arrows-alt"></i>';
  } else {
    if (document.exitFullscreen) {
      toggle.innerHTML = '<i class="fas fa-compress-arrows-alt"></i>';
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
