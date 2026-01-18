function nextPage(page) {
  window.location.href = page;
}

function showInfo() {
  document.getElementById("info").classList.toggle("hidden");
}

function showAkibat() {
  document.getElementById("akibat").classList.remove("hidden");
}
function showPopup(text, img) {
  document.getElementById("popup-text").innerText = text;
  document.getElementById("popup-img").src = img;
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
function playClick() {
  const sound = document.getElementById("clickSound");
  sound.currentTime = 0;
  sound.play();
}

function playMusic() {
  const music = document.getElementById("bgMusic");
  if (music && music.paused) {
    music.volume = 0.4; // lembut
    music.play();
  }
}

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (!music) return;

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
function showStars() {
  const container = document.getElementById("star-container");
  if (!container) return;

  for (let i = 0; i < 8; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.innerText = "⭐";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = "70%";

    container.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 1500);
  }
}
function showPopupAnimated(textArray, img) {
  const popup = document.getElementById("popup");
  const textEl = document.getElementById("popup-text");
  const imgEl = document.getElementById("popup-img");

  textEl.innerHTML = ""; // kosongkan dulu
  imgEl.src = img;

  popup.classList.remove("hidden");

  textArray.forEach((line, index) => {
    const span = document.createElement("span");
    span.innerHTML = line;
    span.style.animationDelay = (index * 0.6) + "s";
    textEl.appendChild(span);
  });
}
