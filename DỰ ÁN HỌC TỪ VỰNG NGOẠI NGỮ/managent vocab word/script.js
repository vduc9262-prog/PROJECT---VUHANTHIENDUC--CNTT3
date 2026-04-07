
let words = [
    {
        id: "1",
        word: "Cat",
        meaning: "mèo",
        categoryId: "animal",
        example: "The cat is sleeping on the sofa."
    },
    {
        id: "2",
        word: "Dog",
        meaning: "chó",
        categoryId: "animal",
        example: "My dog loves playing in the park."
    },
    {
        id: "3",
        word: "Tree",
        meaning: "cây",
        categoryId: "plant",
        example: "This tree is very tall."
    },
    {
        id: "4",
        word: "Flower",
        meaning: "hoa",
        categoryId: "plant",
        example: "She picked a beautiful flower."
    }
];


const Savedata = () => {
    localStorage.setItem("listwords", JSON.stringify(words)) || [];
}


const loadData = () => {
    const saved = localStorage.getItem("listwords");
    if (saved) {
        words = JSON.parse(saved);
    }
};

loadData();







const renderWords = document.getElementById("renderWords");

const renderTable = (list) => {
    let html = ""

    list.forEach((item) => {
        html += `
      <tr>
        <td class="word">${item.word}</td>
        <td class="meaning">${item.meaning}</td>
        <td class="category">${item.categoryId}</td>
        <td class="actions">
          <button onclick="openEdit('${item.id}')" class="btn-edit" id="Edit" >Edit</button>
          <button onclick="openDelete('${item.id}')" class="btn-delete" id="Popupdelete">Delete</button>
        </td>
      </tr>
    `

    });
    renderWords.innerHTML = html;
    Savedata();
};

renderTable(words);






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









let modal = document.getElementById('PopAdd');
let addNewBtn = document.getElementById("btn-add");
let closeBtn = document.getElementById('closeBtn');
let cancelBtn = document.getElementById("cancelBtn");
let saveBtn = document.getElementById('saveBtn');
let modalTitle = document.getElementById('modalTitle');


const close_1 = () => {
    modal.style.display = 'none';
    errorWord.innerText = "";
    errorMea.innerText = "";
    errorCate.innerText = "";
};

addNewBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener('click', close_1);
cancelBtn.addEventListener('click', close_1);




let SaveAdd = document.getElementById("saveBtn");
let CategoryAdd = document.getElementById("categoryInput");
let NameAdd = document.getElementById("wordInput");
let DeripAdd = document.getElementById("meaningInput");
let errorWord = document.getElementById("ErrorWord");
let errorMea = document.getElementById("ErrorMeaning");
let errorCate = document.getElementById("ErrorSelect");

SaveAdd.addEventListener("click", (e) => {
    e.preventDefault();

    const addItems = () => {

        let NameInput = NameAdd.value.trim();
        let DrepInput = DeripAdd.value.trim();
        let CategInput = CategoryAdd.value.trim();


        errorWord.innerText = "";
        errorMea.innerText = "";
        errorCate.innerText = "";

        let check = true;


        if (NameInput === "") {
            errorWord.innerText = "không đc để trống!";
            check = false;
        }

        if (DrepInput === "") {
            errorMea.innerText = "không đc để trống!";
            check = false;
        }

        if (CategInput === "") {
            errorCate.innerText = "phải chọn 1 lựa chọn!";
            check = false;
        }

        if (!check) {
            return;
        }

        let NewWords = {
            id: Date.now(),
            word: NameInput,
            meaning: DrepInput,
            categoryId: CategInput,
        };

        words.push(NewWords);
        Savedata();
        renderTable(words);

        NameAdd.value = "";
        DeripAdd.value = "";
        CategoryAdd.value = "";

        modal.style.display = "none";
                Swal.fire({
  
  text: "thêm thành công!",
  icon: "success"
});
    };

    addItems();
});














let buttonX = document.getElementById("close_edit");
let buttonCancel = document.getElementById("btn_cancelEditWord");
let UpdateAll = document.getElementById("popUpEdit");
let boxUpdate = document.getElementById("modal_box");
let Edit = document.getElementById("Edit");
let inputWord = document.getElementById("editInputWord");
let inputMeaning = document.getElementById("editInputMeaning");
let inputCategory = document.getElementById("editInputCategory");
let SaveUpdate = document.getElementById("btn_saveEditWord");
let ErrorW = document.getElementById("errorW");
let ErrorM = document.getElementById("errorM");
let ErrorC = document.getElementById("errorC");


const close_3 = () => {
    UpdateAll.style.display = "none";
    ErrorW.innerText = "";
    ErrorM.innerText = "";
    ErrorC.innerText = "";

};

Edit.addEventListener("click", () => {
    UpdateAll.style.display = "flex";
});

buttonX.addEventListener('click', close_3);
buttonCancel.addEventListener('click', close_3);



let currentEditId = null; 

let openEdit = (id) => {
    document.getElementById("popUpEdit").style.display = "flex";

     currentEditId = id;

    let findWord = words.find((s) => s.id === id);

    inputWord.value = findWord.word;

    inputMeaning.value = findWord.meaning;

    inputCategory.value = findWord.categoryId;






    SaveUpdate.addEventListener("click", () => {


        const handeleUpWord = () => {
            let indexWord = words.findIndex((s) => s.id ===  currentEditId);

            words[indexWord].word = inputWord.value;

            words[indexWord].meaning = inputMeaning.value;

            words[indexWord].categoryId = inputCategory.value;



            ErrorW.innerText = "";
            ErrorM.innerText = "";
            ErrorC.innerText = "";

            let check = true;


            if (inputWord.value === "") {
                ErrorW.style.display = "block"
                ErrorW.innerText = "không đc để trống!";
                check = false;
            }

            if (inputMeaning.value === "") {
                ErrorM.innerText = "không đc để trống!";
                check = false;
            }

            if (inputCategory.value === "") {
                ErrorC.innerText = "phải chọn 1 lựa chọn!";
                check = false;
            }

            if (!check) {
                return;
            }


            Savedata();
            renderTable(words);
            UpdateAll.style.display = "none";
           Swal.fire({
  
  text: "cập nhật thành công!",
  icon: "success"
});
        };
        

        handeleUpWord();

    });

};


let deleteModal = document.getElementById("popUpDeleteWord");
let confirmBtn = document.getElementById("confirmDeleteBtn");
let closeDe = document.getElementById("closeDeleteBtn");
let cancelDele = document.getElementById("cancelDelete");

let currentDeleteId = null; 


let openDelete = (id) => {

    currentDeleteId = id;

    document.getElementById("popUpDeleteWord").style.display = "flex";

};

const closeDeletePopup = () => {
    deleteModal.style.display = "none";

};


closeDe.addEventListener('click', closeDeletePopup);
cancelDele.addEventListener('click', closeDeletePopup);

confirmBtn.addEventListener("click", () => {


    let index = words.findIndex((item) => item.id === currentDeleteId);
        words.splice(index, 1);     
        Savedata();
        renderTable(words);
       deleteModal.style.display = "none";
               Swal.fire({
  
  text: "xóa thành công!",
  icon: "success"
});
});




let inputSearchVocab = document.getElementById("Search");

inputSearchVocab.addEventListener("keyup", () => {

    let keyword = inputSearchVocab.value.toLowerCase().trim();

    let resuil = words.filter(w => w.word.toLowerCase().includes(keyword)// để tìm kiếm 
    );

    renderTable(resuil);
});
