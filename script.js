function quizBio() {
  let r = prompt("Définition santé ?");
  document.getElementById("bio").innerText =
    (r && r.toLowerCase().includes("bien"))
    ? "✔️ OK"
    : "❌ OMS = bien-être physique, mental et social";
}

function quizSocial() {
  let r = prompt("Donne une inégalité de santé");
  document.getElementById("social").innerText =
    (r) ? "✔️ OK" : "❌ ex : revenus, éducation, territoire";
}