import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConstantProvider } from './constant-provider';




@Injectable()
export class GuiaListagem {
  academias: any;


  constructor(public http: Http) {

  }
  	

    getAcademias(){
       return new Promise((resolve, reject) => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(ConstantProvider.API_ENDPOINT+'aloarsenal/api/academias')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.academias = data;
          resolve(this.academias);
        }, error => {
          reject(error);
        });
    });
    }
  	


}
