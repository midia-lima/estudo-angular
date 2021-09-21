import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {

  id: number;
  aluno: any;
  inscricao: Subscription

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService
  ) { }

  ngOnInit(): void {

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
    })

    this.aluno = this.alunoService.getAluno(this.id)

    if (this.aluno === null){
      this.aluno = {};
    }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }

}
