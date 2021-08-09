import { Component, OnInit } from '@angular/core';

import {CursosService} from './curso.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosService : CursosService;

  constructor(_cursosService: CursosService) {
    this.cursosService = _cursosService
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    )
  }
}
