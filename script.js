function quizBio() {
  let r = prompt("Définis la santé (OMS)");

  if (r && r.toLowerCase().includes("bien")) {
    document.getElementById("bioResult").innerText = "✔️ Correct !";
  } else {
    document.getElementById("bioResult").innerText =
    "❌ Réponse : état de bien-être physique, mental et social.";
  }
}

function quizSocial() {
  let r = prompt("Cite un déterminant de santé");

  if (r && (
    r.toLowerCase().includes("revenu") ||
    r.toLowerCase().includes("environnement") ||
    r.toLowerCase().includes("mode de vie")
  )) {
    document.getElementById("socialResult").innerText = "✔️ Correct !";
  } else {
    document.getElementById("socialResult").innerText =
    "❌ Ex : revenu, environnement, accès aux soins.";
  }
}