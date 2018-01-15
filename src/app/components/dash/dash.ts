import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { DataService } from '../services/data.service';
import { Products } from './usermodel';
import { Pdt } from './usermodel';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.html',
  styleUrls: ['./dash.css']
})
export class DashComponent implements OnInit {

      
    filteredpdts: Observable<any[]>;
    PdtCtrl: FormControl;
    PdtQty: FormControl;
    PdtCost: FormControl;
    product_list : Products[]=[];
    invoice_number: number ;
     qtyprice: number;    
  
        

        
  constructor(private router: Router ,private ds: DataService, private formBuilder: FormBuilder) {
    this.PdtQty = new FormControl();
     this.PdtCtrl = new FormControl();
      this.PdtCtrl = new FormControl();
      this.PdtCost = new FormControl();
     this.filteredpdts = this.PdtCtrl.valueChanges.pipe(
        startWith(''),
        map(state => state ? this.filterpdts(state) : this.product_list.slice())
      );
    
  }
   filterpdts(name: any) {
    return this.product_list.filter(state =>
      state.PRODUCT_NAME.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

 
  



      
   

    
  ngOnInit()  {

    

    this.getproduct_list();

   this.invoice_number = this.ds.getinvoicenumber();
  }

  

 getproduct_list() : void{
      this.ds.getproduct_list().then(driverlist=> this.product_list = driverlist )
    
  }

  readValue ( a: number)
  {

        
  console.log('mike',a)
this.qtyprice = a;
  }
onEnter(a : any)
{
  
  this.PdtCost.patchValue(this.PdtQty.value*this.qtyprice, {emitEvent : false});
      
  console.log('hi',a)
}
  
 view() {
   
        console.log(this.product_list) ;      
   
         }
  }
