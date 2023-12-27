import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSearchListenerService {

  constructor() { }

  UserSearchListenerSubject = new Subject<string>();
}
