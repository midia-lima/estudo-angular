import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [AlertModalComponent, ConfirmModalComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [AlertModalComponent],
  entryComponents: [ConfirmModalComponent],
})
export class SharedModule {}
