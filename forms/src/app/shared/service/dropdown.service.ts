import { IEstadoBr } from './../models/IEstadoBr';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DropdownService {

  constructor(private http: HttpClient ) { }

  getEstadosBr() {
    return this.http.get<IEstadoBr>('assets/dados/estadosbr.json');
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pleno' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Senior' }
    ]
  }

  getTecnologias() {
    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'csharp', desc: 'C Sharp' },
      { nome: 'javascript', desc: 'Javascript' },
      { nome: 'sql', desc: 'SQL' },
    ]

  }

  getNewsletter() {
    return [
      { valor: 'true', desc: 'Sim'},
      { valor: 'false', desc: 'Não'},
    ]
  }

}


