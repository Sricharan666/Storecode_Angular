import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

public box = true;

  
  constructor(private http : HttpClient) { }

 

   getEmployee(){
    return this.http.get<any>("http://localhost:3000/posts")
  }

  postEmployee(userModelObj: any) {
    return this.http.post<any>('http://localhost:3000/posts', userModelObj);
  }

  getProductsByStoreCode(storeCode: string) {
    return this.http.get<any>('http://localhost:3000/products?productCode=' + storeCode);
  }

}
