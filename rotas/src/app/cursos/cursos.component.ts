import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private CursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.cursos = this.CursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
    (queryParams: any) => {
      this.pagina = queryParams['pagina'];
    })
  }

  proximaPagina(){
    //this.pagina++
    this.router.navigate(['/cursos'],
    {queryParams: {'pagina': ++this.pagina}})
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
