
let items = [
    {
        id: 1,
        name: "Con vật",
        description: "là những con vật biết đi ",

    },
    {
        id: 2,
        name: "Cây cối",
        description: "cây có lá màu xanh ",

    }
];


let SaveData = () => {
    localStorage.setItem("listItems", JSON.stringify(items)) || [];
}

let loadData = () => {

    let data = localStorage.getItem("listItems");
    if (data) {
        items = JSON.parse(data);
    }
}


loadData();

let renderCate = document.getElementById("render");

const RenderItems = (list) => {
    let render = ``;
    list.forEach((el) => {
        render += `
    <tr>
      <td class="name">${el.name}</td>
      <td>${el.description}</td>
          <td class="actions">
            <button onclick="openEdit(${el.id})"  class="edit" id="EditCaterios">Edit</button>
            <button onclick="openDelete(${el.id})" class="delete" id="PopupdeleteCaterios">Delete</button>
          </td>
    </tr>
    `
    });
    renderCate.innerHTML = render;
    SaveData();
};


RenderItems(items);




let modal = document.getElementById('PopAdd');
let addNewBtn = document.getElementById("addBtn");
let closeBtn = document.getElementById('closeBtn');
let cancelBtn = document.getElementById("cancelBtn");
let saveBtn = document.getElementById('saveBtn');
let modalTitle = document.getElementById('modalTitle');
let SaveAdd = document.getElementById("saveBtn");
let NameAdd = document.getElementById("wordInput");
let DeripAdd = document.getElementById("meaningInput");
let ErrorName = document.getElementById("errorName");
let ErrorDrep = document.getElementById("errorDre");


const close_1 = () => {
    modal.style.display = 'none';

    ErrorName.innerText = "";
    ErrorDrep.innerText = "";

};

addNewBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener('click', close_1);
cancelBtn.addEventListener('click', close_1);



SaveAdd.addEventListener("click", (e) => {
    e.preventDefault();
    const addItems = () => {
        let NameInput = NameAdd.value.trim();
        let DrepInput = DeripAdd.value.trim();



        ErrorName.innerText = "";
        ErrorDrep.innerText = "";


        let check = true;


        if (NameInput === "") {
            ErrorName.innerText = "không đc để trống!";
            check = false;
        }

        if (DrepInput === "") {
            ErrorDrep.innerText = "không đc để trống!";
            check = false;
        }


        if (!check) {
            return;
        }

        const NewCaterios = {
            id: Date.now(),
            name: NameInput,
            description: DrepInput,
        }

        items.push(NewCaterios);
        SaveData();
        RenderItems(items);
        modal.style.display = "none";


        NameAdd.value = "";
        DeripAdd.value = "";
                      Swal.fire({
  
  text: "thêm thành công!",
  icon: "success"
});

    };

    addItems();

})






let buttonX = document.getElementById("close_edit");
let buttonCancel = document.getElementById("btn_cancelEditWord");
let UpdateAll = document.getElementById("popUpEdit");
let boxUpdate = document.getElementById("modal_box");
let Edit = document.getElementById("EditCaterios");
let inputName = document.getElementById("editInputWord");
let inputDrep = document.getElementById("editInputMeaning");
let SaveUpdate = document.getElementById("btn_saveEditWord");
let EditNameError = document.getElementById("EditNameError");
let EditDrepError = document.getElementById("EditDrepError");


const close_3 = () => {
    UpdateAll.style.display = 'none';
    EditNameError.innerText = "";
    EditDrepError.innerText = "";
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
    let findWord = items.find((s) => s.id === id);

    inputName.value = findWord.name;
    inputDrep.value = findWord.description;



    SaveUpdate.addEventListener("click", () => {


        const handeleUpWord = () => {
            let indexWord = items.findIndex((s) => s.id === currentEditId);

            items[indexWord].name = inputName.value;
            items[indexWord].description = inputDrep.value;


            EditNameError.innerText = "";
            EditDrepError.innerText = "";


            let check = true;


            if (inputName.value === "") {
                EditNameError.innerText = "không đc để trống!";
                check = false;
            }

            if (inputDrep.value === "") {
                EditDrepError.innerText = "không đc để trống!";
                check = false;
            }

            if (!check) {
                return;
            }

            SaveData();
            RenderItems(items);
            UpdateAll.style.display = "none";
                          Swal.fire({
  
  text: "cập nhật thành công!",
  icon: "success"
});
        }

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

    let index = items.findIndex(item => item.id === currentDeleteId);

    items.splice(index, 1);
    SaveData();
    RenderItems(items);
    deleteModal.style.display = "none";
     Swal.fire({
  
  text: "xóa thành công!",
  icon: "success"
});

});



let inputSearchVocab = document.getElementById("searchInput");

inputSearchVocab.addEventListener("keyup", () => {

    let keyword = inputSearchVocab.value.toLowerCase().trim();

    let resuil = items.filter(n => n.name.toLowerCase().includes(keyword)
    );

    RenderItems(resuil);
});





