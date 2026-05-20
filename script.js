function quizBio() {
  let score = 0;

  let q1 = prompt("Définis la santé (OMS)");
  if (q1 && q1.toLowerCase().includes("bien")) score++;

  let q2 = prompt("Cite 1 déterminant de santé");
  if (q2 && (
    q2.toLowerCase().includes("revenu") ||
    q2.toLowerCase().includes("environnement") ||
    q2.toLowerCase().includes("comportement") ||
    q2.toLowerCase().includes("génétique")
  )) score++;

  let q3 = prompt("Donne un exemple de maladie chronique");
  if (q3 && (
    q3.toLowerCase().includes("diabète") ||
    q3.toLowerCase().includes("cancer") ||
    q3.toLowerCase().includes("asthme")
  )) score++;

  let q4 = prompt("Quel est le rôle des anticorps ?");
  if (q4 && q4.toLowerCase().includes("défense")) score++;

  let q5 = prompt("Donne un signe de l'inflammation");
  if (q5 && (
    q5.toLowerCase().includes("rougeur") ||
    q5.toLowerCase().includes("douleur") ||
    q5.toLowerCase().includes("gonflement")
  )) score++;

  document.getElementById("resultBio").innerText =
    "🎯 Score BAC : " + score + "/5";
}