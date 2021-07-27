import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormTesteModule } from './form-teste/form-teste.module';
import { InputPropertyComponent } from './input-property/input-property.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormTesteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
