import { Scooter } from "./scooter.js"

class ScooterApi {

    static BASE_URL: string = "https://66e9866687e417609449d0cc.mockapi.io/api/v1/scooter"
    constructor() {

    }

    static getAllData = async (): Promise<Scooter[] | void> => {
        try {
            const res = await fetch(this.BASE_URL);

            if (!res.ok) {
                throw new Error("Cant get data");
            }

            const scootersArray: Scooter[] = await res.json()
            console.log(scootersArray);
            return scootersArray
        } catch (error) {
            console.log(error);
        } finally {
            console.log("either we get data ot error");

        }

    }


    static getScooter = async (id: string): Promise<Scooter | void> => {
        try {
            const res = await fetch(`${this.BASE_URL}/${id}`);

            if (!res.ok) {
                throw new Error("Cant get data");
            }

            const scootersArray: Scooter = await res.json()
            console.log(scootersArray);
            return scootersArray
        } catch (error) {
            console.log(error);
        } finally {
            console.log("either we get data or error");

        }

    }


    static async addScooter(scooter: Scooter): Promise<Scooter | void> {
        try {
            const response = await fetch(this.BASE_URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(scooter)
            });

            const newScooter: Scooter = await response.json();

            if (!response.ok) {
                throw new Error("Cant post data")
            }

            return newScooter;

        } catch (error) {
            console.log(error);

        } finally {
            console.log("either we get data ot error");
        }
    }

}

export default ScooterApi;