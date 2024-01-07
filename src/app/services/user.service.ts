import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  //service to component
  users=[
    {
      name:"Lopa",
      status:"active"
    },
    {
      name:"Kanika",
      status:"inactive "
    }
  ]



  //For component to service communication
  addNewUser(name:string,status:string)
  {
    this.users.push({name:name,status:status});   
  }
}
