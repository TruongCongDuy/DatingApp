import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { error } from 'console';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  model:any={};
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }
  register()
  {
    this.accountService.register(this.model).subscribe(Response=>{
      console.log(Response);
      console.log("Hello");
      
      this.cancel();
    },error=>{
      console.log(error);
    })
  }
  cancel()
  {
    this.cancelRegister.emit(false);
  }

}
