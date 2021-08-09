import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  tarefa: any = {

    desc: 'Descrição da Tarefa',
    responsavel: {
      usuario: null
    }
    //responsavel: {nome: 'Migde'}

  };

  constructor() { }

  ngOnInit(): void {
  }

}
