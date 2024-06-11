import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppstorageService {

  constructor() { }

store(key:string,value:any){
  localStorage.setItem(key,JSON.stringify(value))
}

retrieve(key:string){
return JSON.parse(key);
}

}
