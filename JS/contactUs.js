const firebaseConfig = {
  apiKey: "AIzaSyC9gabfI0y2qKGHluuKk1FRzzpYhuI_Rd0",
  authDomain: "grocery-project-cab87.firebaseapp.com",
  databaseURL:"https://grocery-project-cab87-default-rtdb.firebaseio.com/",
  projectId: "grocery-project-cab87",
  storageBucket: "grocery-project-cab87.appspot.com",
  messagingSenderId: "193331229878",
  appId: "1:193331229878:web:0b1987cdf6e17fd70a6217"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
