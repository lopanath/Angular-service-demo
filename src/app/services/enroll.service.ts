import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor() { }
  onEnrollCkick(title:string)
  {
    alert("Thanl you for enrolling "+title);
  }
}
