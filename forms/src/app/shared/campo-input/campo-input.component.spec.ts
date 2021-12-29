/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CampoInputComponent } from './campo-input.component';

describe('CampoInputComponent', () => {
  let component: CampoInputComponent;
  let fixture: ComponentFixture<CampoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
