function szamit() {
  var m = Number(document.getElementById("magassag").value);
  var t = Number(document.getElementById("testsuly").value);
  var ki = document.getElementById("eredmeny");

  if (m <= 0 || t <= 0) {
    ki.textContent = "A magasság és a testsúly nem lehet nulla vagy kevesebb!";
    return;
  }

  var bmi = t / ((m / 100) * (m / 100));
  var allapot;

  if (bmi < 16) allapot = "Súlyos soványság";
  else if (bmi < 17) allapot = "Mérsékelt soványság";
  else if (bmi < 18.5) allapot = "Enyhe soványság";
  else if (bmi < 25) allapot = "Normál testsúly";
  else if (bmi < 30) allapot = "Túlsúlyos";
  else if (bmi < 35) allapot = "Elhízott (I. fokú)";
  else if (bmi < 40) allapot = "Elhízott (II. fokú)";
  else allapot = "Súlyosan elhízott (III. fokú)";

  ki.textContent = "Az állapotod: " + allapot + " (BMI: " + bmi.toFixed(1) + ")";
}