import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TeamService {
  constructor(private http: HttpClient) {}
  
  getTeam(): Observable<{ grid_columns: any[], grid_data: any[] }> {
    return this.http.get<{ grid_columns: any[], grid_data: any[] }>('https://01.fy25ey01.64mb.io/');
  }
}
