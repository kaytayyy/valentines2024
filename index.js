document.getElementById("yes").addEventListener("click", playSong);
document.getElementById("alsoyes").addEventListener("click", playSong);

function playSong() {
    const newP = document.getElementById("final");
    const newText = document.createTextNode("I knew you'd say yes, I love you my dear, you're so beautiful and smart. Moches<3");
    newP.appendChild(newText);
    var audio = document.getElementById("mylove");
  audio.play();
}