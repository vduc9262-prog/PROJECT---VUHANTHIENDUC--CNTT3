let Person = [
   {
    id:"1",
    firstName: "ad",
    lastName: "min",
    email: "admin@gmail.com",
    password: "Admin12345",
    confirmPass:"Admin12345",
},
];

const Savedata = () => {
    localStorage.setItem("listperson",JSON.stringify(Person)) || [];
}
Savedata();

const loadData = () => {
    const saved = localStorage.getItem("listperson");
    if (saved) {
        Person = JSON.parse(saved);
    }
};

loadData();

const firstName = document.getElementById("Onename");
const lastName  = document.getElementById("Twoname");
const email     = document.getElementById("email");
const password  = document.getElementById("pass");
const confirmPass = document.getElementById("againPass");
const buttonAdd = document.getElementById("btn-add");
let errorEmail=document.getElementById("emailError");
let errorPassword=document.getElementById("PassError");
let errorRePassword=document.getElementById("CoFirmPassError");
let firstError = document.getElementById("first");
let lastError = document.getElementById("last");
let loginSuccessPopup = document.getElementById("loginSuccessPopup");
let closeSuccessBtn = document.getElementById("closeSuccessBtn");


const isEmailExist = (email) => {
    return Person.some(s => s.email.toLowerCase() === email.toLowerCase());
};

buttonAdd.addEventListener("click", (e) =>{
    e.preventDefault();

    const addPerson = () => {
    let NewPerson = {
        id: Date.now(),
        firstName:firstName.value.trim(),
        lastName:lastName.value.trim(),
        email:email.value.trim(),
        password:password.value.trim(),
        confirmPass:confirmPass.value.trim(),
    }

     firstError.innerText = "";
     lastError.innerText = "";
     errorEmail.innerText ="";
     errorPassword.innerText = "";
     errorRePassword.innerText = "";

     let check = true;

  
    
    if(firstName.value === ""){
        firstError.innerText = "Firstname không được để trống !"
        check = false;
    }

    if(lastName.value === ""){
        lastError.innerText = "Lastname không được để trống !"
        check = false;
    }

    if (email.value === "") {
        errorEmail.innerText ="email không được để trống !"
        check = false;
    }
    if(password.value ===""){
        errorPassword.innerText = "mật khẩu không được để trống";
        check = false;
    }
    
    if(confirmPass.value ===""){
        errorRePassword.innerText = "nhập lại mật khẩu không được để trống";
        check = false;
    }

   if(!check){
    return;
   }


    if (isEmailExist(email.value)) {
        errorEmail.innerText ="Email này đã tồn tại! Vui lòng sử dụng email khác."
       return;
    }
   
     //đúng định dạng email
    //dùng includes() để check xem mọt chuỗi có chứa đoạn ký tự đó ko(trả về true nếu chứa)
    //định dạng : abc@gmail.com

    if(!email.value.includes("@")){//nếu như trong email ng dùng nhập ko có @ thì thực hiện
        errorEmail.innerHTML=`Thiếu dấu @`
        return
    }else{
        //tách email 
        let part = email.value.split("@");
        if(part.length !== 2){//kiểm tra mặc định chỉ đc 1 dấu @
            errorEmail.innerHTML=`Chỉ cần 1 dấu @`
            return;
        }else{ // kiểm tra đoạn trước @
            if(part[0] === ""){
                errorEmail.innerHTML=`thiếu tên trước @. sai định dạng email`
                return;
            }else if(part[1] ===""){
                errorEmail.innerHTML=`thiếu đoạn đằng sau @. sai định dạng email`
                return;
            }
        }
    }
       
    if (password.value.length < 8) {
        errorPassword.innerText = "mật khẩu tối thiểu phải là 8 kí tự !"
        
    }

    let hasLower = false;
    let hasUpper = false;
    let hasNumber = false;

    for (let char of password.value) {
        if (char >= 'a' && char <= 'z') {
            hasLower = true;
        } else if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    if (!hasLower || !hasUpper || !hasNumber) {
        errorPassword.innerText = "Mật khẩu phải chứa in hoa, in thường, kí tự số."
        return;
    }

    if(confirmPass.value !== password.value ){
        errorRePassword.innerText = "Password và confirmPass phải giống nhau !"
        return;
    }

    
    

    Person.push(NewPerson);
    Savedata();
    loginSuccessPopup.style.display = "flex";

    closeSuccessBtn.addEventListener("click" , ()=> {
 window.location.href = "login.html";
    })


   

    loadData();

    firstName.value ="";
    lastName.value ="";
    email.value ="";
    password.value ="";
    confirmPass.value ="";
}
addPerson();

});


