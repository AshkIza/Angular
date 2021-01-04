export interface ITopic {
    id:number | undefined;
    name:string| undefined;
    details:string| undefined;//comma separated details
}

export class Topic implements ITopic{
    id: number | undefined;
    name: string | undefined;
    details: string | undefined;

    constructor(id?:number,
        title?:string,
        name?:string,
        details?:string){
            this.id = id;
            this.name = name;
            this.details = details;
    }
}
