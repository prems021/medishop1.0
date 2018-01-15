import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from  './components/dash/dash';
import { AdminpanelComponent } from  './components/adminpanel/adminpanel';
import { AddproductComponent } from  './components/adminpanel/product/addproduct';
import { TestExample } from './components/dash/test';
const routes: Routes = [
    { path: '',component: HomeComponent },
     { path: 'login',component: HomeComponent },
    { path: 'dash', component: DashComponent },
 { path: 'admin-panel', component: AdminpanelComponent },
 { path: 'add_product', component: AddproductComponent },
  { path: 'test', component: TestExample },
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
