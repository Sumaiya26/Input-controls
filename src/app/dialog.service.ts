import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private _MessageSource = new Subject<string>();
  sourceMessage$ = this._MessageSource.asObservable();

ng
  constructor() { }

  sendMessage(message:string){
    console.log(message)
    this._MessageSource.next(message);


  }
}
