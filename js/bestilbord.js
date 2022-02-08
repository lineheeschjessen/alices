let hide = true; // global

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





/* --------------- *** Selvstudiedag 3 spørgsmål 2,3,4,5 (jeg kunne kun få koden til at virke her, ikke i js/js.js)*** --------------- */

// ---------- Form: bestil bord ----------

btn1.addEventListener('click', function() {
  if (document.getElementById("ditnavn").value == null || document.getElementById("ditnavn").value == "") {
    alert('Please fill in your name');
  } else if (document.getElementById("dinemail").value == null || document.getElementById("dinemail").value == "") {
    alert('Please fill in your e-mail');
  } else {
    radio.style.display = "block";
    navn.style.display = "none";
  }
})

//fortsætte videre indtil brugeren taster send på lastField
btn2.addEventListener('click', function() {
  check.style.display = "block";
  radio.style.display = "none";
})

btn3.addEventListener('click', function() {
  lastField.style.display = "block";
  check.style.display = "none";
})
