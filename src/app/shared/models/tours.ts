export class Tour{
    id!:number;
    name!:string;
    description!:string;
    descriptionPointsSection1?: string[];
    descriptionPointsSection2?: string[];
    inclusions?: { mealDes: string ;transportDes: string ; accommodateDes:string; activityDes:string[]; }[];
    imageUrl!:string;
    stars:number=0;
    iframe!:string;
    itinerary?:{day:number; details:string; description:string;imageUrl:string;}[];

}