import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

const endpoint = "https://aplicaciones.espe.edu.ec:8443/authentication/api/query/ced=1804110474&auth=ba82e1071cd1ea9669a62f24213ba4a4.cf3df0e97b7a4cc68aeaab8d6bbb9691?fbclid=IwAR2AtWEDw3vg4Kc0iqEBHERSgj_W3sr9zclRJv2YxtEhbOXfWN--dQlNVeg";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};


@Injectable({
  providedIn: 'root'
})
export class ConsumirService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getProducts(): Observable<any> {
    return this.http.get(endpoint).pipe(map(this.extractData));
  }


}
