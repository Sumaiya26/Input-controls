import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _service:DialogService) {

   }

  ngOnInit(){
    this._service.sourceMessage$
    .subscribe(
      message => {
        console.log(message)
        if(message == "Form Submitted"){
          alert("Form Submitted Successfully");
        }else if(message == "Come Out"){
          alert("Thankyou")
        }

      }
    )
  }


}
