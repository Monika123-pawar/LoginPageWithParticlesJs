
  var firebaseConfig = {
    apiKey: "AIzaSyCISXOZfxrvvn0pSBVHPh4ZyKwrkaPCTGU",
    authDomain: "jforce-task-login.firebaseapp.com",
    databaseURL: "https://jforce-task-login.firebaseio.com",
    projectId: "jforce-task-login",
    storageBucket: "jforce-task-login.appspot.com",
    messagingSenderId: "980405938533",
    appId: "1:980405938533:web:6b74a6c55ab0b7f860598c",
    measurementId: "G-4ESH368MQT"
  };

  firebase.initializeApp(firebaseConfig);
 
  const auth=firebase.auth();


  function register(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    const promise=auth.createUserWithEmailAndPassword(email,password);
    promise.catch(e=>alert(e.message),redirect=false);
  
  }

  function login(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    const promise=auth.signInWithEmailAndPassword(email,password);
    promise.catch(e=>alert(e.message));
   
  }

  function logOut(){
    auth.signOut();
    alert("log out");
    document.getElementById("redirect").style="display:none";
    document.getElementById("formContainer").style="display:block";
 
  }
 function redirect(){
  document.getElementById("redirect").style.display="block";
  document.getElementById("formContainer").style.display="none";
 }

  auth.onAuthStateChanged(function(user){
    if(user){
      var email=user.email;
        // alert("Active User "+email);
         document.getElementById("redirect").style="display:block";
         document.getElementById("formContainer").style="display:none";

    }
    else{
      // alert("No Active User ");
    document.getElementById("redirect").style="display:none";

    }

  });

  function validate()  
  {  
  var x=document.myform.email.value;  
  var password=document.myform.password.value;  
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf(".");  
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
    return false;  
    }  

  }
