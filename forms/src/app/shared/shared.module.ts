import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { DropdownService } from './service/dropdown.service';
import { ConsultaCepService } from './service/consulta-cep.service';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { CampoInputComponent } from './campo-input/campo-input.component';




@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    CampoInputComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FormDebugComponent,
    ErrorMsgComponent,
    CampoInputComponent
  ],
  providers: [
    DropdownService,
    ConsultaCepService
  ]
})
export class SharedModule { }
