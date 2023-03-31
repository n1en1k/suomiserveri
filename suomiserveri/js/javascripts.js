//<!--
function validateForm() {
  var nimi = document.forms["contactForm"]["yourName"].value;
  var sposti = document.forms["contactForm"]["yourEmail"].value;
  var viesti = document.forms["contactForm"]["yourMessage"].value;

  var nimi = nimi.replace(/^\s+|\s+$/g, "");
  var sposti = sposti.replace(/^\s+|\s+$/g, "");
  var viesti = viesti.replace(/^\s+|\s+$/g, "");

  if (nimi == "") {
    alert("Problem on Name!");
    document.getElementById("yourName").focus();
    return false;
  } else if (nimi == "Your name") {
    alert("Problem on Name!");
    document.getElementById("yourName").focus();
    return false;
  }

  var e = document.forms["contactForm"]["yourEmail"].value;
  var atpos = e.indexOf("@");
  var dotpos = e.lastIndexOf(".");

  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= e.length) {
    alert("Problem on Email!");
    document.getElementById("yourEmail").focus();
    return false;
  } else if (viesti == "") {
    alert("Problem on Message!");
    document.getElementById("yourMessage").focus();
    return false;
  } else if (viesti == "Your message") {
    alert("Problem on Message!");
    document.getElementById("yourMessage").focus();
    return false;
  }
}

function validateSecondForm() {
  var subem = document.forms["subscribe"]["email"].value;

  var subem = subem.replace(/^\s+|\s+$/g, "");

  if (subem == "") {
    alert("Problem on Email!");
    document.getElementById("email").focus();
    return false;
  } else if (subem == "Email Address") {
    alert("Problem on Email!");
    document.getElementById("email").focus();
    return false;
  }
}

//-->
