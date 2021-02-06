import { Todo } from "src/app/todo/models/todo";

export interface IUser {
    firstname : string;
    lastname : string;
    phonenumber : number;
    address : IAddress;
    userCredential : IUserCredentials;
    todoList : Todo[]
}

export interface IAddress {
    unitnumber : string;
    streetaddress : string;
    city : string;
    state : string;
}

export class Address implements IAddress{
    unitnumber : string;
    streetaddress : string;
    city : string;
    state : string;

    constructor(unitnumber : string,
        streetaddress : string,
        city : string,
        state : string){
            this.unitnumber = unitnumber;
            this.state = state;
            this.city = city;
            this.streetaddress = streetaddress;
    }
}

export interface IUserCredentials {
    emailaddress : string | undefined;
    username : string | undefined;
    password : string | undefined;
}

export class UserCredentials implements IUserCredentials {
    emailaddress : string | undefined;
    username : string | undefined;
    password : string | undefined;

    constructor(emailaddress? : string,
        username? : string,
        password? : string){
            this.emailaddress = emailaddress;
            this.username = username;
            this.password = password;
    }

    equalsUserName(other:UserCredentials):boolean{
        return this.username === other.username &&
            this.password === other.password;
    }
    equalsEmail(other:UserCredentials):boolean{
        return this.emailaddress === other.emailaddress &&
            this.password === other.password;
    }

}


export class User implements IUser{
    id : number;
    firstname : string;
    lastname : string;
    phonenumber : number;
    address : Address;
    userCredential : UserCredentials;
    todoList : Todo[];

    constructor(firstname:string, 
        lastname:string,
        phonenumber : number,
        address : Address,
        userCredential : UserCredentials){
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber =  phonenumber;
        this.address = address;
        this.userCredential =  userCredential;
    }

    setId(id:number){
        this.id = id;
    }
    setTodoList(todo : Todo[]){
        this.todoList = new Array().concat(todo);
    }
}




