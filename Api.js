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
export class ScooterApi {
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
    static editScooter(scooter, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.BASE_URL}/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(scooter)
                });
                const newScooter = yield response.json();
                if (!response.ok) {
                    throw new Error("Cant edit data");
                }
                return newScooter;
            }
            catch (error) {
                console.log(error);
            }
            finally {
                console.log("either we edit data ot error");
            }
        });
    }
    static deleteScooter(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.BASE_URL}/${id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const newScooter = yield response.json();
                if (!response.ok) {
                    throw new Error("Cant delete data");
                }
                return newScooter;
            }
            catch (error) {
                console.log(error);
            }
            finally {
                console.log("either we delete data ot error");
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
// const scooter:Scooter= new Scooter (
//     "model 1000",
//     100,
//     "khkkh",
//     "red",
//     ScooterStatus.Available
// )
// ScooterApi.deleteScooter("4")
const displayData = (method) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield method();
    console.log(data);
});
// קריאה לפונקציה עם המתודה `getAllData`
// displayData(ScooterApi.getAllData);
// קריאה לפונקציה עם המתודה `getScooter` (שדורשת גם ID)
// displayData(() => ScooterApi.editScooter(scooter,"2"));
export default ScooterApi;
