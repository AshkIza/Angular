import { ITopic } from "src/app/topics/models/topic";

export interface IBookResource {
    id:number | undefined;
    authur:string| undefined;
    description:string| undefined;
    isb:string| undefined;
    online_resource:boolean| undefined;
    title: string;
    urlLink: string;
    topic:ITopic| undefined;
}
