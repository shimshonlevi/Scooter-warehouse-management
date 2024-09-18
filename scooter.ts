import { ScooterStatus } from "./statusEnum";

export  class Scooter{
    serialNumber: string;
    model: string;
    batteryLevel: number;
    imageUrl : string;
    color : string;
    status: ScooterStatus;

    constructor(model : string, batteryLevel: number,
        imageUrl: string, color: string, status: ScooterStatus ){
           
            this.serialNumber = Scooter.generateId()
            this.model = model
            this.batteryLevel = batteryLevel
            this.imageUrl = imageUrl
            this.color = color
            this.status = status
        }
        static generateId(): string{
            const random = Math.floor(
                 Math.random() * (9_000_000 - 1_000_000 +1) + 1_000_000
                );
                return random.toString()
        }

}
