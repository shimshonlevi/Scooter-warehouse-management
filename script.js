var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ScooterApi from "./Api.js";
import { Scooter } from "./scooter.js";
const homeSection = document.getElementById("home-section");
const createScooterForm = document.querySelector(".create-scooter");
const scooterTable = document.getElementById("scooter-table");
const editSection = document.getElementById("edit-section");
const editScooterForm = document.querySelector(".edit-scooter");
createScooterForm === null || createScooterForm === void 0 ? void 0 : createScooterForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hhhhhhhhhhhhhhhhhhh");
    event.preventDefault();
    const serialNumberElement = document.getElementById('serialNumber');
    const modelElement = document.getElementById('model');
    const batteryLevelElement = document.getElementById('batteryLevel');
    const imageUrlElement = document.getElementById('imageUrl');
    const colorElement = document.getElementById('color');
    const statusElement = document.getElementById('status');
    const serialNumber = serialNumberElement.value;
    const model = modelElement.value;
    const batteryLevel = parseFloat(batteryLevelElement.value);
    const imageUrl = imageUrlElement.value;
    const color = colorElement.value;
    const status = statusElement.value;
    const newScoter = new Scooter(model, batteryLevel, imageUrl, color, status);
    const addedScooter = yield ScooterApi.addScooter(newScoter);
    console.log("added");
    RenderTable();
}));
function RenderTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const tbody = document.querySelector('tbody');
        const ScootersArr = yield ScooterApi.getAllData();
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
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                // editButton.addEventListener('click', () => editScooter(scooter.serialNumber));
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                // deleteButton.addEventListener('click', () => deleteScooter(scooter.serialNumber));
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
                tbody === null || tbody === void 0 ? void 0 : tbody.appendChild(row);
            });
        }
    });
}
RenderTable();
