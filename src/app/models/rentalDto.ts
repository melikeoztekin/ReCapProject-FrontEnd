export interface RentalDto{
    rentalId? : number;
    carId:number;
    firstName?:string;
    lastName?:string;
    companyName?:string;
    carName : string;
    carModelYear:number,
    carDailyPrice:number,
    carDescription:string,
    brandName:string;
    userName:string;
    rentDate : Date;
    returnDate : Date;
    customerId?:number,
}