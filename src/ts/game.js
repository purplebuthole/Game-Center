let url = window.location.pathname;
if (url == "/motherload") {
  window.RufflePlayer = window.RufflePlayer || {};
  window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("container");
    container.appendChild(player);
    player.load("./src/swf/motherload.swf");
  });
}
if (url == "/learn2") {
  window.RufflePlayer = window.RufflePlayer || {};
  window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("container");
    container.appendChild(player);
    player.load("./src/swf/learn2.swf");
  });
}
if (url == "/learn") {
  window.RufflePlayer = window.RufflePlayer || {};
  window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("container");
    container.appendChild(player);
    player.load("./src/swf/learn.swf");
  });
}
if (url == "/fancy") {
  window.RufflePlayer = window.RufflePlayer || {};
  window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("container");
    container.appendChild(player);
    player.load("./src/swf/fancypantsadventureworld.swf");
  });
}
if (url == "/Mayhem") {
  window.RufflePlayer = window.RufflePlayer || {};
  window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("container");
    container.appendChild(player);
    player.load("./src/swf/Gunm.swf");
  });
}
if (url == "/Quiz") {
  window.RufflePlayer = window.RufflePlayer || {};
  window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("container");
    container.appendChild(player);
    player.load("./src/swf/quiz.swf");
  });
}
if (url == "/Quiz2") {
  window.RufflePlayer = window.RufflePlayer || {};
  window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    const container = document.getElementById("container");
    container.appendChild(player);
    player.load("./src/swf/quiz2.swf");
  });
}
console.log(url);
