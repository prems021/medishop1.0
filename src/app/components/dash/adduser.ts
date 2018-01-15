import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './usermodel';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { AuthenticationService } from '../services/login.service';
@Component({
  selector: 'add-user',
  templateUrl: './adduser.html',
  styleUrls: ['./dash.css']
})
export class AdduserComponent implements OnInit {
  
    myForm: FormGroup;
   
    model = new User('','');
        
  constructor( private router: Router,private fb: FormBuilder, private aS: AuthenticationService) {   }
  ngOnInit()  {
  
            this.myForm = this.fb.group({
            username: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
            password: ['']             
                                      });
              }
 login() {
   
   this.aS.adduser(this.myForm.value)
    .subscribe(data => {                                    
                      this.router.navigate(['/dash']);
                       },
                                error => {
                                          });
    
          }
  }
