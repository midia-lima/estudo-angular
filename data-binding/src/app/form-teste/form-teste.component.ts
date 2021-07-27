import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-teste',
  templateUrl: './form-teste.component.html',
  styleUrls: ['./form-teste.component.css']
})
export class FormTesteComponent {
  nome: String = "teste";
  pessoa: any = {
    nome: 'Midia',
    idade: '28'
  }
  constructor() { }
  ngOnInit(): void {
  }

}
