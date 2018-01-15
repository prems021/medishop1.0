import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from './headers' ;
import { Products } from '../dash/usermodel';
import { Pdt } from '../dash/usermodel';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {

    
  
    total = 0;
    
    constructor(private http: Http) { }


createpdt_table(model:any)
    {
         let body= JSON.stringify(model); 
      
       
              console.log('body',body);
        
        return this.http.get('http://papercups.herokuapp.com/api/public/create_pdt_table', { headers: contentHeaders})
            .map((response: Response) => {
                               
                {
                    let postr = response.json();
                   console.log('responce=',postr)
                    
                }
            })   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


 getinvoicenumber() : number
{
return 10;

}


  getproduct_list() : Promise<Products[]> {
    


               return this.http.get('http://papercups.herokuapp.com/api/public/get_product_list')
                  .toPromise()
                  .then(res => <Products[]> res.json())
                  .then(data => { console.log(data); return data; }); 
                  

                                 
   }

     getpdt_list() : Promise <Pdt[]> {
    


               return this.http.get('http://papercups.herokuapp.com/api/public/get_pdt_list')
                  .toPromise()
                  .then(res => <Pdt[]> res.json())
                  .then(data => { console.log(data); return data; }); 
                  

                                 
   }



     addproduct(model:any) {

        let body= JSON.stringify(model); 
       
       
              console.log('body',body);
        
        return this.http.post('https://papercups.herokuapp.com/api/public/add_new_product', body, { headers: contentHeaders})
            .map((response: Response) => {
                               
                {
                    let postr = response.json();
                   console.log('responce=',postr)
                    
                }
            })   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            
            
    } 
    
           


  
  get_total()
  {
    return this.total;
  }
  
  get_username()
  {
   
  }

    adduser(model:any) {

        let body= JSON.stringify(model); 

        
        return this.http.post('https://assespmkvy.herokuapp.com/api/public/add_user', body, { headers: contentHeaders})
            .map((response: Response) => {
                
                
                {
                    let postr = response.json();
                   console.log('responce=',postr)
                    
                }
            })   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            
            
    }
}
