import { VerificaEmailService } from './services/verifica-email.service';
import { FormValidations } from './../shared/form-validations';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { IEstadoBr } from './../shared/models/IEstadoBr';
import { DropdownService } from './../shared/service/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsultaCepService } from '../shared/service/consulta-cep.service';
import { empty, Observable } from 'rxjs';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  //criar as variáveis que vai representar o formulário

  formulario: FormGroup;
  estados: Observable<IEstadoBr>;
  cargos: any[];
  tecnologias: any[];
  newsletterOp: any[];
  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropDownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
  ) { }

  // componente ngOnInit é disparado sempre que um componente é inicializado
  ngOnInit() {

    //this.verificaEmailService.verificarEmail('email@email.com').subscribe();
    this.newsletterOp = this.dropDownService.getNewsletter();
    this.tecnologias = this.dropDownService.getTecnologias();
    this.cargos = this.dropDownService.getCargos();

    //usamos o async para fazer o subscribe
    this.estados = this.dropDownService.getEstadosBr();

    /*
    this.dropDownService.getEstadosBr()
    .subscribe(dados => {
      this.estados = dados;
      console.log(dados)
    })
    */

    // exemplo utilizando FormGroup
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    //   endereco: new FormGroup({
    //     cep: new FormControl(null),
    //     numero: new FormControl(null),
    //     logradouro: new FormControl(null),
    //     complemento: new FormControl(null),
    //     bairro: new FormControl(null),
    //     localidade: new FormControl(null),
    //     uf: new FormControl(null)
    //   })
    // });


    //exemplo utilizando formBuilder
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      confirmarEmail: [null, [FormValidations.equalsTo('email')]],
      cargo: [null],
      newsletter: ['true'],
      tecnologias: [null],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks(),

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        logradouro: [null, Validators.required],
        complemento: [null],
        bairro: [null, Validators.required],
        localidade: [null, Validators.required],
        uf: [null, Validators.required]
      })

    });

    this.formulario.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status do CEP: ', value)),
        switchMap(status => status === 'VALID'
          ? this.cepService.consultaCEP(this.formulario.get('endereco.cep').value)
          : empty()
        )

      )
      .subscribe(dados => dados ? this.populaDadosForm(dados) : {});
  }

  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false))
    return this.formBuilder.array(values)
  }



  onSubmit() {
    console.log(this.formulario);

    let valueSubmit = Object.assign({}, this.formulario.value);

    //console.log(valueSubmit);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v, i) => v ? this.frameworks[i] : null)
        .filter(v => v !== null)
    });



    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
        .subscribe(dados => {
          this.resetar();
        },
          (error: any) => alert("erro"));

    } else {
      //ativa validação do formulário
      console.log('formulario inválido');
      this.verificaValidacoesForm(this.formulario);

    }

  }

  verificaValidacoesForm(formGroup: FormGroup) {
    // Object.keys(formGroup.controls).forEach(campo => {
    //   console.log(campo)
    //   const controle = formGroup.get('campo');
    //   console.log(controle)
    //   controle.markAsDirty();
    //   if(controle instanceof FormGroup){
    //     this.verificaValidacoesForm(controle);
    //   }
    // });
  }

  resetar() {
    this.formulario.reset();
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== "") {
      this.cepService.consultaCEP(cep)
        .subscribe(dados => this.populaDadosForm(dados));
    }
  }

  resetaDadosForm() {
    this.formulario.patchValue({
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

  populaDadosForm(dados) {
    this.formulario.patchValue({
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

  // verificaValidTouched(campo) {
  //   return !this.formulario.get(campo).valid && !this.formulario.get(campo).touched
  // }

  // aplicaCssErro(campo) {
  //   return {
  //     'has-error': this.verificaValidTouched(campo),
  //     'has-feedback': this.verificaValidTouched(campo)
  //   }
  // }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Senior', desc: 'Dev Senior' }
    this.formulario.get('cargo').setValue(cargo);
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias() {
    this.formulario.get('tecnologias').setValue(['java', 'javascript'])
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  }



}
