import { Component, OnInit } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'service-demo';
//Object of userservice is injected 
  constructor(private _userServ:UserService){

  }
  users:{name:string,status:string} []=[]
  
  ngOnInit():void{
       this.users=this._userServ.users
  }
}
