import ScooterApi from "./Api.js";
import { ScooterStatus } from "./statusEnum.js";
import { Scooter } from "./scooter.js";

const homeSection = document.getElementById("home-section");
const createScooterForm = document.querySelector(".create-scooter");
const scooterTable = document.getElementById("scooter-table");
const editSection = document.getElementById("edit-section");
const editScooterForm = document.querySelector(".edit-scooter");



createScooterForm?.addEventListener('submit' ,async (event:Event) =>
 { console.log("hhhhhhhhhhhhhhhhhhh");
 
    event.preventDefault();
    const serialNumberElement = document.getElementById('serialNumber') as HTMLInputElement;
    const modelElement = document.getElementById('model') as HTMLInputElement;
    const batteryLevelElement = document.getElementById('batteryLevel') as HTMLInputElement;
    const imageUrlElement = document.getElementById('imageUrl') as HTMLInputElement;
    const colorElement = document.getElementById('color') as HTMLInputElement;
    const statusElement = document.getElementById('status') as HTMLSelectElement;

    
    const serialNumber = serialNumberElement.value;
    const model = modelElement.value;
    const batteryLevel = parseFloat(batteryLevelElement.value); 
    const imageUrl = imageUrlElement.value;
    const color = colorElement.value;
    const status = statusElement.value as ScooterStatus; 

    


    const newScoter:Scooter = new Scooter(
        
        model,
        batteryLevel,
        imageUrl,
        color,
        status
        
    );

    const addedScooter  = await ScooterApi.addScooter(newScoter)
    console.log("added");
    
    RenderTable()


})


async function RenderTable(){
        const tbody = document.querySelector('tbody');

        
        const ScootersArr = await ScooterApi.getAllData();
        console.log(ScootersArr); 
        if (ScootersArr) {
            ScootersArr.forEach(scooter => {
                console.log(scooter.model);

                const row = document.createElement("tr");

                const serialNumberCell = document.createElement("td");
                serialNumberCell.textContent = scooter.serialNumber;

                const modelCell = document.createElement("td");
                modelCell.textContent = scooter.model;

                const batteryLevelCell = document.createElement("td");
                batteryLevelCell.textContent = scooter.batteryLevel.toString();

                const imageUrlCell = document.createElement("td");
                const img = document.createElement("img");
                img.src = scooter.imageUrl;
                img.alt = "Scooter Image";
                img.width = 100;
                imageUrlCell.appendChild(img);

                const colorCell = document.createElement("td");
                colorCell.textContent = scooter.color;

                const statusCell = document.createElement("td");
                statusCell.textContent = scooter.status;

                const editButton = document.createElement('button')
                editButton.textContent = 'Edit';
                editButton.addEventListener('click', () => editScooter(scooter.serialNumber));

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => deleteScooter(scooter.serialNumber));

                const actionsCell = document.createElement('td');
                actionsCell.appendChild(editButton);
                actionsCell.appendChild(deleteButton);

                row.appendChild(serialNumberCell);
                row.appendChild(modelCell);
                row.appendChild(batteryLevelCell);
                row.appendChild(imageUrlCell);
                row.appendChild(colorCell);
                row.appendChild(statusCell);
                row.appendChild(actionsCell);

                // הוספת השורה ל-tbody של הטבלה
                tbody?.appendChild(row);

                
            });
        }
    
}




RenderTable()