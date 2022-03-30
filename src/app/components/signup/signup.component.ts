import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ServicesService} from 'src/services/services.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private _service: ServicesService) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);  
    console.log(f.valid);  
    const data=f.value
    this._service.registeruser(data).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
