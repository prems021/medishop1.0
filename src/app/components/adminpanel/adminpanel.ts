import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { DataService } from '../services/data.service';
@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.html',
  styleUrls: ['./admin-panel.css']
})
export class AdminpanelComponent implements OnInit {
  constructor( private router: Router, private ds: DataService ) {   }
  ngOnInit()  {}
 add_product_table()
 {
   this.ds.createpdt_table('hi');

 }
  }