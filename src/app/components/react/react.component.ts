import { Component } from '@angular/core';
import { EnrollService } from 'src/app/services/enroll.service';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent {
  title="React";
  constructor(private _enrollService:EnrollService)
  {

  }
   enroll()
   {
    // const enrollService=new EnrollService();
  //this.enrollService.onEnrollCkick(this.title);
  this._enrollService.onEnrollCkick(this.title);
   }
}
