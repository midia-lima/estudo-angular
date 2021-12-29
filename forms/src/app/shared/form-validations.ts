import { FormArray, FormControl, FormGroup } from "@angular/forms";

export class FormValidations {

  requiredMinCheckbox(min = 1) {
    const validator = (formArray: FormArray) => {

      //programação funcional e reativa
      const totalChecked = formArray.controls
        .map(v => v.value)
        .reduce((total, current) => current ? total + current : total, 0);

      return totalChecked >= min ? null : { required: true };

      //programação estruturada
      // const values = formArray.controls;
      // let totalChecked = 0
      // for (let i = 0; i < values.length; i++) {
      //   if (values[i].value) {
      //     totalChecked += 1;
      //   }
      //   return totalChecked >= min ? null : { required: true };
      // }
    };
    return validator
  }

  static cepValidator(control: FormControl) {
    const cep = control.value;
    if (cep && cep !== '') {
      var validaCep = /^[0-9]{5}-[0-9]{3}$/;
      return validaCep.test(cep) ? null : { cepInvalido: true }
    }
    return null
  }

  static equalsTo(outroCampo: string) {
    const validator = (formControl: FormControl) => {
      if (outroCampo == null) {
        throw new Error('É necessário informar um campo.')
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null
      }

      const field = (<FormGroup>formControl.root).get(outroCampo)

      if (!field) {
        throw new Error('É necessário informar um campo válido.')
      }

      if (field.value !== formControl.value) {
        return { equalsTo: outroCampo }
      }
      return null

    }
    return validator

  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config = {
      'required': `${fieldName} é obrigatório`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
    }
    return config[validatorName]
  }
}
