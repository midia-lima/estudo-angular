import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CursosService: CursosService
  ) {
    // this.id = this.route.snapshot.params['id'];
    console.log(this.route);

  }

  // maneira mais elegante de pegar os parametros da rota
  // ngOnInit é inicializado quando a classe é executada
  ngOnInit() {

    // subscribe -> vamos nos increver nas mudanças do parametro
    this.inscricao = this.route.params.subscribe (
      (params: any) => {
        this.id = params['id'];
      }
    )

    this.curso = this.CursosService.getCurso(this.id);

    if(this.curso == null){
      this.router.navigate(['/cursos/curso-nao-encontrado'])
    }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
