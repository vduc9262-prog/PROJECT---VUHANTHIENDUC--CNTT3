let NextQuiz = document.getElementById("Next");
let Quiz2 = document.getElementById("QuizTwo");
let Quiz1 = document.getElementById("QuizOne");
let PreviousQuiz = document.getElementById("Previous");
let ButtonStart = document.getElementById("btn-add");
let TrueChoice = document.getElementById("true");
let FalseChoice = document.getElementById("false");



ButtonStart.addEventListener("click",()=> {
  
      Quiz1.style.display = "block";


});




NextQuiz.addEventListener("click", () => {
   
     Quiz1.style.display = "none";

     Quiz2.style.display= "block";

  if(TrueChoice.addEventListener("click", ()=> {
      TrueChoice.style.background = "green";
   })){
      return Quiz2;
   }
      



  else if (FalseChoice.addEventListener("click",()=> {
    FalseChoice.style.background = "red";
})){
     return Quiz1;
}


});

PreviousQuiz.addEventListener("click", () => {
   
     Quiz1.style.display = "block";

     Quiz2.style.display= "none";

});





let user =JSON.parse(localStorage.getItem("listperson")) || [];

let logOut =document.getElementById(`logout`)

let newLocal = JSON.parse(localStorage.getItem("currentUser"));


let logoutPopup = document.getElementById("logoutPopup");

let cancelLogout = document.getElementById("cancelLogout");

let confirmLogout = document.getElementById("confirmLogout");




logOut.addEventListener("click",()=> {

     
    logoutPopup.style.display = "flex";

       cancelLogout.addEventListener("click", ()=> {
         logoutPopup.style.display = "none";
       })

       confirmLogout.addEventListener("click" ,()=> {

            localStorage.removeItem("currentUser");
            window.location.href ="../register and login/login.html";
        
       });
});