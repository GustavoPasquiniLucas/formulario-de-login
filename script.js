let fsList = document.querySelectorAll(".multiple-field");
for(let i =0; i < fsList.length; i++){
    initMultipleFieldSet(fsList[i]);
}

function initMultipleFieldSet(fs){
    let addButton = document.createElement("button");
    addButton.textContent = "Adicionar";
    addButton.type = "button";

    fs.appendChild(addButton);

    let firstInput = fs.querrySelector("input");

    addButton.addEventListener("click",function(){
        let div = document.createElement("div");
        let newInput = document.createElement("input");
        newInput.name = firstInput.name;
        newInput.type = firstInput.type;

        let deletButton = document.createElement("button")
        deletButton.textContent="Exluir";
        deletButton.type ="button";

        div.appendChild(newInput);
        div.appendChild(deletButton);

        deletButton.addEventListener("click", function(){
            div.remove();
        });
        fs.inserBefore(div,addButton);
    });
}