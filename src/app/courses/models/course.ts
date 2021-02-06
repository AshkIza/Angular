import { ITopic, Topic } from "src/app/topics/models/topic";

export interface ICourse {
    id:number | undefined;
    title:string| undefined;
    topic:ITopic| undefined;
    description:string| undefined;
}

export class Course implements ICourse {
    id:number | undefined;
    title:string| undefined;
    topic:Topic| undefined;
    description:string| undefined;

    constructor(id?:number,
        title?:string,
        topic?:Topic,
        description?:string){
            this.id = id;
            this.title = title;
            this.topic = topic;
            this.description = description;
    }
}
