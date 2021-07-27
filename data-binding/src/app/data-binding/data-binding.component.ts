import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent  {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://picsum.photos/seed/picsum/500/300'
  valorAtual: string = ''
  valorSalvo = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';



  getValor(){
    return 1
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('botao clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value)
  }

  salvarValor(valor){
    this.valorSalvo = valor
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;

  }






  constructor() { }


}
