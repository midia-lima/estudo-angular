import { AlunosService } from './../alunos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit, OnDestroy {

  id: number;
  aluno: any;
  inscricao: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService

  ) { }

  ngOnInit() {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
    })

    this.aluno = this.alunoService.getAluno(this.id)
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
    console.log("editou");

  }



}
