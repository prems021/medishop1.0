import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from './headers' ;

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class AuthenticationService {

    
    names: string;
    total = 0;
    constructor(private http: Http) { }

     login(model:any) {

        let body= JSON.stringify(model); 
       let user = model.username;
        this.names= user;
             
        
        return this.http.post('https://assespmkvy.herokuapp.com/api/public/login_check', body, { headers: contentHeaders})
            .map((response: Response) => {
                               
                {
                    let postr = response.json();
                   console.log('responce=',postr)
                    
                }
            })   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
            
            
    }
           

   
 col_tot(tot:number)
  {
    this.total = tot;
    console.log('total in service = ',this.total);
  }

     submit(model:any)
  {
    

     let body= JSON.stringify(model); 
      return this.http.post('https://assespmkvy.herokuapp.com/api/public/submit_exam', body, { headers: contentHeaders})
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
    return this.names;
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
