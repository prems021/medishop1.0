import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminpanelComponent} from './components/adminpanel/adminpanel';
import { AdduserComponent } from './components/dash/adduser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashComponent } from './components/dash/dash';
import { AppRoutingModule } from './app-routing.module';
import {AuthenticationService} from'./components/services/login.service';
import {DataService} from'./components/services/data.service';
import 'hammerjs'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { ElectronService } from './providers/electron.service';
import {ReactiveFormsModule} from "@angular/forms";
import { AddproductComponent } from './components/adminpanel/product/addproduct';

import { TestExample } from './components/dash/test';



import {
  
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,AdduserComponent,DashComponent,AdminpanelComponent,AddproductComponent,
    HomeComponent,TestExample
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
   ReactiveFormsModule,
    FormsModule,
    HttpModule,
     MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
    
    AppRoutingModule
  ],
  providers: [ElectronService,AuthenticationService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
