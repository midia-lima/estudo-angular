import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConsultaCepService } from '../shared/service/consulta-cep.service';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null,
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
    }

  }

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
  ) { }

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '')

    if (cep != null && cep !== "") {
      this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDadosForm(dados ,form));

    }

  }

  populaDadosForm(dados, formulario) {

    /*
    formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        cep: dados.cep,
        logradouro: dados.logradouro,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        localidade: dados.localidade,
        uf: dados.uf,
      }
    });
    */

    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        logradouro: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        localidade: dados.localidade,
        uf: dados.uf,
      }
    })

  }

  resetaDadosForm(formulario) {

    formulario.form.patchValue({
      endereco: {
        cep: null,
        logradouro: null,
        complemento: null,
        bairro: null,
        localidade: null,
        uf: null
      }
    })
  }

  onSubmit(form) {
    console.log(form);
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value)).subscribe(dados => {
      console.log(dados)
      form.form.reset();

    });

  }

  ngOnInit(): void {
  }

}
