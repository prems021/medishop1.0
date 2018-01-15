import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'add-product',
  templateUrl: './addproduct.html',
  styleUrls: ['./addproduct.css']
})
export class AddproductComponent implements OnInit {
    Gsts = [0,5,12,18,28];
    
    expenseForm = this.formBuilder.group({
      Productname: '',
      Code: '',
      Price: 0,
      Gst_slab: ''
    });
  constructor(
 
  private router: Router, private ds: DataService, private formBuilder: FormBuilder ) {};
  ngOnInit()  {}
 add_product()
 {

    this.ds.addproduct(this.expenseForm.value)
    .subscribe(data => { 
                    
                     
                      this.router.navigate(['/dash']);
                     
                },
                
                error => {
                    this.router.navigate(['/']);
                    
                });
 }
  }