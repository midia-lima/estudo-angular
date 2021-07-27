import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTesteComponent } from './form-teste.component';

@NgModule({
  declarations: [FormTesteComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[FormTesteComponent]
})
export class FormTesteModule { }
