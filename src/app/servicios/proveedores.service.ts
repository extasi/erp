import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProveedoresService {

  constructor(private http: HttpClient) { }

  getProveedores(){
    let url = 'http://localhost:3000/proveedor';
    return this.http.get(url)
                    .map((resp:any)=>{
                      return resp;
                    });

  }

  getProveedoresId(id){
    let url = 'http://localhost:3000/proveedor/';//añadimos la / para que pegue el id
    return this.http.get(url + id)  
                .map((resp:any)=>{
                  return resp;
                }); 
                    }
                  

  postProveedor(proveedor){
    let url = "http://localhost:3000/proveedor";
    return this.http.post(url,proveedor)
                    .map((resp:any)=>{
                      console.log(resp);
                      return resp;
                    });

}

putProveedor(id,proveedor){
let url = "http://localhost:3000/proveedor/";
return this.http.put(url+id, proveedor)
          .map((resp:any)=>{
          return resp;
});
}

deleteProveedor(id){
  let url = "http://localhost:3000/proveedor/";
  return this.http.delete(url+id)
            .map((resp:any)=>{
            return resp;
  });
}

}

