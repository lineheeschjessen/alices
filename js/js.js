/**
 * file: js.js
 **/

 /* --------------- *** OBS. SELVSTUDIEDAG 3 FINDES I "BESTILBORD.JS" OG SELVSTUDIEDAG 5 FINDES I "MENUKORT.HTML"*** --------------- */

let kontakt = document.getElementById("adresse");
let info = document.getElementById("info");
let medarbejdere = document.getElementById("medarbejdere");
let citat = document.getElementById("citat");
let hide = true; // global


/* --------------- *** Selvstudiedag 2 spørgsmål 1,2,3,4 *** --------------- */

// skjul og vis burgermenu samt lav burgermenuikonet om
let hideShow = function() {

  if (hide == true) {
    document.getElementById('showBrg').style.display = 'block';
    document.getElementById('ikon').style.display = 'none';
    document.getElementById('ikon2').style.display = 'block';
    hide = false;
  } else {
    document.getElementById('showBrg').style.display = 'none';
    document.getElementById('ikon').style.display = 'block';
    document.getElementById('ikon2').style.display = 'none';
    hide = true;
  }
}
// detect click
burger.addEventListener('click', hideShow);






/* --------------- *** Selvstudiedag 1 spørgsmål 3 *** --------------- */

// ---------- Medarbejderliste ----------

let visMig, personale = [
  "Sille - Tjener",
  "Karoline - Tjener",
  "Simon - Tjener",
  "Alice - Kok",
  "Kim - Opvasker",
  "Anna - Opvasker",
  "Viggo - Altmuligmand"
]

personale.sort();

// vis mig er en tæller der gør at koden kører gennem alt indhold i listen
for (visMig in personale) {
  medarbejdere.innerHTML += '<li>' + personale[visMig] + '</li>';
}





/* --------------- *** Selvstudiedag 1 spørgsmål 4 *** --------------- */

// ---------- Inspirerende citat (det virker, men er ikke i brug)----------
/*
let citater = [
  '"A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food."',
  '"A great restaurant is one that just makes you feel like you´re not sure whether you went out or you came home and confuses you. If it can do both of those things at the same time, you´re hooked."',
  '"It all comes back to the basics. Serve customers the best-tasting food at a good value in a clean, comfortable restaurant, and they´ll keep coming back."',
  '"If you have good food, people will come to your restaurant."'
]

// et tilfældigt citat
function tilfaeldig() {
  return citater[Math.floor(Math.random() * citater.length)];
};

citat.innerHTML = tilfaeldig();
*/






/* --------------- *** Selvstudiedag 4 *** --------------- */

// ---------- Afspil video når den er synlig ----------

window.addEventListener("scroll", function() {

  let minvideo = document.getElementById("minvideo");
  let se = document.getElementById("se");

  console.log("Is the #lyd visible or not? " + elFllVsbl(se)); // test


  if (elFllVsbl(se)) {
    if (!(minvideo.curentTime > 0)) {
      minvideo.play();
    }
  } else {
    minvideo.pause();
    minvideo.currentTime = 0;
  }
})

function elFllVsbl(el) {
  return (
    el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}






/* --------------- *** Selvstudiedag 1 spørgsmål 2 *** --------------- */

// ---------- Hjemmesidenavn og adresse (kontakt)----------
function adresse() {

  let kode = `
    <aside>
      <li>Alices Restaurant</li>
      <li>Latinerkvarteret, Aarhus</li>
      <li>Tlf: 12 34 56 78</li>
      <li>E-mail: alices@gmail.comt</li>
      </aside>
      `;
  return kode;
}

kontakt.innerHTML += adresse();

// ---------- Sociale medier ----------
function SocialeMedier() {

  let some = `
    <aside>
      <li>facebook.com/alicesrestaurant</li>
      <li>Instagram: @alicesrestaurant</li>
      </aside>
      `;
  return some;
}

some.innerHTML += SocialeMedier();









/* --------------- *** Selvstudiedag 1 spørgsmål 1 *** --------------- */


// ---------- Navn og dato + klokkeslet ----------

// Navn
info.innerHTML = '&copy Line Heesch  Jessen - '

//Ugedag
const d = new Date();

const uge = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']

info.innerHTML += uge[d.getDay()];

// Dato
info.innerHTML += ' d. ' + d.getDate();

//Måned
const month = ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"];

let name = month[d.getMonth()];
info.innerHTML += ' ' + name;

//År
info.innerHTML += ' ' + d.getFullYear();

// klokkeslet
info.innerHTML += ' kl. ' + d.getHours();
info.innerHTML += ':' + d.getMinutes();
info.innerHTML += ':' + d.getSeconds();



// ---------- åbningtider ----------
let dag = d.getDay()
let ugedag = dag;
let day;

switch (ugedag) {

  case 1:
    day = 'Vi har åbent i dag mandag fra 12:00 - 23:00';
    break;
  case 2:
    day = 'Vi har åbent i dag tirsdag fra 12:00 - 23:00';
    break;
  case 3:
    day = 'Vi har åbent i dag onsdag fra 17:00 - 23:00';
    break;
  case 4:
    day = 'Vi har åbent i dag torsdag fra 18:00 - 22:15';
    break;
  case 5:
    day = 'Vi har åbent i dag fredag fra 12:00 - 00:00';
    break;

  default:
    day = 'weekend: Lukket'
}

aabningstider.innerHTML = day;


// ---------- Åbningstider i footer ----------

let vis, aaben = [
  "mandag fra 12:00 - 23:00",
  "tirsdag fra 12:00 - 23:00",
  "onsdag fra 17:00 - 23:00",
  "torsdag fra 18:00 - 22:15",
  "fredag fra 12:00 - 00:00",
  "weekend: Lukket"
]

// vis mig er en tæller der gør at koden kører gennem alt indhold i listen
for (vis in aaben) {
  tider.innerHTML += '<li>' + aaben[vis] + '</li>';
}
