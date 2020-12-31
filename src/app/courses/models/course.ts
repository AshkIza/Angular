export interface ICourse {
    id:number | undefined;
    title:string| undefined;
    topic:string| undefined;
    description:string| undefined;
}

export class Course implements ICourse {
    id:number | undefined;
    title:string| undefined;
    topic:string| undefined;
    description:string| undefined;

    constructor(id?:number,
        title?:string,
        topic?:string,
        description?:string){
            this.id = id;
            this.title = title;
            this.topic = topic;
            this.description = description;
    }
}
