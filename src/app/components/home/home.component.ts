import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { AuthenticationService } from '../services/login.service';
import { User } from '../dash/usermodel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 

  myForm: FormGroup;
  model = new User('','');
  isclicked : boolean= false;
  errmsg : number = 0;
  constructor( private router: Router,private fb: FormBuilder, private aS: AuthenticationService) {   }
  ngOnInit()  {
    this.isclicked=false;
   this.myForm = this.fb.group({
            username: [''],
            password: ['']             
                                      });

  }
   
    login() {
   
  this.isclicked = true;
  if(this.myForm.controls.username.value  === 'a' && this.myForm.controls.password.value === 'a')
    
                    
                   {  
                      this.router.navigate(['/dash']);
                   }
                     
      else {

             this.errmsg = 1;
         }          
                
                
                    
                    
  
   
        }
  }
