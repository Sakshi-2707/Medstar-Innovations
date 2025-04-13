const firebaseConfig = {
  apiKey: "AIzaSyC2LjMDFOQOh8CHUTy4-yhmPzEI_A5vZkw",
  authDomain: "contactform-medstar.firebaseapp.com",
  databaseURL: "https://contactform-medstar-default-rtdb.firebaseio.com",
  projectId: "contactform-medstar",
  storageBucket: "contactform-medstar.firebasestorage.app",
  messagingSenderId: "368333086308",
  appId: "1:368333086308:web:a8c57931ee6867bb720971",
  measurementId: "G-BHY8YS2KZG"
};
  
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm-Medstar");

document.getElementById("contactForm-Medstar").addEventListener("submit", submitForm);

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
  document.getElementById("contactForm-Medstar").reset();
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
