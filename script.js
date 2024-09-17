"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
class ScooterApi {
    constructor() {
    }
    static addScooter(scooter) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(this.BASE_URL, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(scooter)
                });
                const newScooter = yield response.json();
                if (!response.ok) {
                    throw new Error("Cant post data");
                }
                return newScooter;
            }
            catch (error) {
                console.log(error);
            }
            finally {
                console.log("either we get data ot error");
            }
        });
    }
}
_a = ScooterApi;
ScooterApi.BASE_URL = "https://66e9866687e417609449d0cc.mockapi.io/api/v1/scooter";
ScooterApi.getAllData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(_a.BASE_URL);
        if (!res.ok) {
            throw new Error("Cant get data");
        }
        const scootersArray = yield res.json();
        console.log(scootersArray);
        return scootersArray;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("either we get data ot error");
    }
});
ScooterApi.getScooter = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(`${_a.BASE_URL}/${id}`);
        if (!res.ok) {
            throw new Error("Cant get data");
        }
        const scootersArray = yield res.json();
        console.log(scootersArray);
        return scootersArray;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("either we get data or error");
    }
});
ScooterApi.getAllData();
ScooterApi.getScooter("1");
