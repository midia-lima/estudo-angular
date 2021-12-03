import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../alunos';
import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit, OnDestroy {

  id: number;
  aluno: Aluno;
  inscricao: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService

  ) { }

  ngOnInit() {

    /*
      this.inscricao = this.route.params.subscribe(
        (params: any) => {
          this.id = params['id'];
      })
      this.aluno = this.alunoService.getAluno(this.id)
    */

    this.inscricao = this.route.data.subscribe(
      (info: {aluno: Aluno}) => {
        console.log('Recebendo o objeto Aluno do resolver')
        this.aluno = info.aluno;
      }
    );

    console.log('ngOnInit: AlunosDetalheComponent');

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
    console.log("editou");

  }

}
