import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss'],
})
export class CursosFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private cursoService: CursosService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.route.params
    //   .pipe(
    //     map((params: any) => params['id']),
    //     switchMap((id) => this.cursoService.loadById(id))
    //   )
    //   .subscribe((curso) => this.updateForm(curso));

    const curso = this.route.snapshot.data['curso'];

    this.form = this.fb.group({
      id: [curso.id],
      nome: [
        curso.nome,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(250),
        ],
      ],
    });
  }

  // updateForm(curso) {
  //   this.form.patchValue({
  //     id: curso.id,
  //     nome: curso.nome,
  //   });
  // }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    //console.log(this.form.value);
    if (this.form.valid) {
      let msgSucess = 'Curso criado com sucesso!';
      let msgErro = 'Erro ao criar curso, tente novamente!';

      if (this.form.value.id) {
        msgSucess = 'Curso atualizado com sucesso!';
        msgErro = 'Erro ao atualizar curso, tente novamente!';
      }

      this.cursoService.save(this.form.value).subscribe(
        (success) => {
          this.modal.showAlertSuccess(msgSucess);
          this.location.back();
        },
        (error) => {
          this.modal.showAlertDanger(msgErro);
        }
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
