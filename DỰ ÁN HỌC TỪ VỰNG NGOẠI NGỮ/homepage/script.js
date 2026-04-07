

let user =JSON.parse(localStorage.getItem("listperson")) || [];

let logOut =document.getElementById(`logout`)

let newLocal = JSON.parse(localStorage.getItem("currentUser"))


let logoutPopup = document.getElementById("logoutPopup");

let cancelLogout = document.getElementById("cancelLogout");

let confirmLogout = document.getElementById("confirmLogout");

let noAccountPopup = document.getElementById("noAccountPopup");

let cancelNoAccount = document.getElementById("cancelNoAccount");

let goToLogin = document.getElementById("goToLogin");



logOut.addEventListener("click",()=> {


    if(!newLocal){
        noAccountPopup.style.display = "flex";

        cancelNoAccount.addEventListener("click", ()=> {
            noAccountPopup.style.display = "none";
        });

        
        goToLogin.addEventListener("click",() => {

       
        window.location.href ="../register and login/login.html";
 })

    }else {
       let check = logoutPopup.style.display = "flex";
       cancelLogout.addEventListener("click", ()=> {
         logoutPopup.style.display = "none";
       })

       confirmLogout.addEventListener("click" ,()=> {
        

        if(check){
            localStorage.removeItem("currentUser");
            window.location.href ="../register and login/login.html";
        }
       })
    } 
});