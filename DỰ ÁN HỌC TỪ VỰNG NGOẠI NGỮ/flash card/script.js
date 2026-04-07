const animal = [
    {
      id: 1,
      word: "Cat",
      meaning: "mèo",
      status: "Not Learned",  
    },
    {
      id: 2,
      word: "Dog",
      meaning: "Chó",
      status: "Not Learned",  
    },
];

let SaveData = () => {
    localStorage.setItem("listAnimals", JSON.stringify(animal)) || [];
}

let loadData = () => {

    let data = localStorage.getItem("listAnimals");
    if (data) {
        animal = JSON.parse(data);
    }
}

loadData();



let wordTableBody = document.getElementById("wordList");

const renderAnimal = () => {
   let html = ``;
   animal.forEach((el) => {
      html += `
          <tr>
              <td>${el.word}</td>
              <td>${el.meaning}</td>
              <td>${el.status}</td>
         </tr>
                         
      `
      wordTableBody.innerHTML = html 
   });
SaveData();


};
renderAnimal();