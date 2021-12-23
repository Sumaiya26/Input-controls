import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {FormBuilder, FormGroup} from '@angular/forms';
import { DialogService } from './dialog.service';
interface Food {
  value: string;
  viewValue: string;
}

 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'TamilNadu'},
    {value: 'pizza-1', viewValue: 'Andhra Pradesh'},
    {value: 'Kerala-2', viewValue: 'Kerala'},
    {value: 'Goa-3', viewValue: 'Goa'},
    {value: 'Karnataka-4', viewValue: 'Karnataka'},
    {value: 'Rajasthan-5', viewValue: 'Rajasthan'},

  ];
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }




  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  constructor(private _Service: DialogService){
    
  }

  FormSubmit(){
    this._Service.sendMessage("Form Submitted");
  }
    

  
  exitapp(){
    
    this._Service.sendMessage("Come Out");

  }

 
  


}

  

 



 


 
  







