import { FormValidations } from './../form-validations';
import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  @Input() msgErro: string;
  @Input() mostrarErro: boolean;

  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  get errorMessage() {

    for (let propertyName in this.control.errors) {

      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
        return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName])
      }

    }

    return null;
  }



  ngOnInit() {



  }

}
