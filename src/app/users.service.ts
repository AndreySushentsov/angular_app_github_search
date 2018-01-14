import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {Injectable} from '@angular/core'

@Injectable()
export class UsersService {
  constructor(private http: Http){}

  getUser(username: string): Observable<any>{
    return this.http.get(`https://api.github.com/users/${username}?client_id=52b01e5cc6ef16c8b3d0&client_secret=8db2f5a58c253c1060bd2416ee46d7243c7cc261`)
    .map((response: Response) => response.json())
  }
}
