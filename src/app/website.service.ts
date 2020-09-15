import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Website } from './website';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(private http: HttpClient) { }

  getWebsites(): Observable<Website[]> {
    const url = 'http://localhost:8000/api/websites';

    return this.http.get<Website[]>(url);
  }
}
