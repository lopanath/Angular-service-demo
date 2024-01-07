import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {

  username:string="";
  status:string="";

  constructor(private _userservice:UserService)
  {

  }
  addUser()
  {
      this._userservice.addNewUser(this.username,this.status);
  }

}

