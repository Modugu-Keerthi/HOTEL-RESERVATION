import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  transform(value: any, DATE_FMT: string): any {
    throw new Error('Method not implemented.');
  }
readonly APIUrl="https://localhost:44340/api";
httpoptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
  constructor(private http:HttpClient) { }
  // getList():Observable<any[]>{
  //   return this.http.get<any[]>("https://localhost:44340/api/Reservation/GetDetails");
  // }
  addList(val:any){
    return this.http.post('https://localhost:44340/api/Reservation/insertDetails',val,this.httpoptions).subscribe();
}
  //   updateList(val:any){
  //       return this.http.put('https://localhost:44340/api/Reservation/update',val);
  //     }
  getList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Reservation/GetDetails')
    

  }
  // addList(val:any){
  //   return this.http.post(this.APIUrl+ '/Reservation/insertDetails',val,this.httpoptions).subscribe();

  // }
  updateList(val:any){
    return this.http.post('https://localhost:44340/api/Reservation/insertDetails',val,this.httpoptions).subscribe();
  }
  deleteList(val:any){
    return this.http.delete("https://localhost:44340/api/Reservation/Delete/"+val);
  }
  masterdata():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Reservation/GethotelDetails')
  }
}
