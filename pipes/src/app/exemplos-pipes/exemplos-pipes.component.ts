import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livros: string[] = ['Angular 2', 'Java'];
  filtro: string;

  livro: any = {
    titulo: 'Estruturas de Dados e Algoritmos em JavaScript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  }

  constructor() { }

  addCurso(valor){
    this.livros.push(valor);
    console.log(this.livros)
  }

  obterCursos(){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ""){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
        return true;
      }
      return false;
    })
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assícrono'), 2000)
  })

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));

  ngOnInit(): void {
  }

}
