import { Injectable } from '@angular/core';
import { Aluno } from './alunos'

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Isabel Jéssica Alves', email: 'isabeljessicaalves_@gmai.com' },
    {id: 2, nome: 'Luís Pietro Bernardes', email: 'luispietrobernardes-85@grupoblackout.com.br' },
    {id: 3, nome: 'Roberto Martin Lucca Costa', email: 'robertomartinluccacosta@opcaoeduca.com.br' }
  ]

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number){

    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i]
      if(aluno.id == id){
        return aluno
      }
    }
    return null;
  }

  constructor() { }
}
