import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL= 'http://localhost:8080/educacion/';

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.URL+'lista');
  }

  public details(id:number): Observable<Education>{
    return this.httpClient.get<Education>(this.URL+`detail/${id}`);
  }

  public save(educacion:Education): Observable<any>{
    return this.httpClient.post<any>(this.URL+'create',educacion);
  }

  public update(id:number,educacion:Education):Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`,educacion);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.URL+`delete/${id}`);
  }
}
