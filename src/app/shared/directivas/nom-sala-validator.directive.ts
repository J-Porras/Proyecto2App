import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS} from '@angular/forms';
import { SalaService } from '../salas-service/sala.service';

@Directive({
  selector: '[appNomSalaValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NomSalaValidatorDirective,
    multi: true
  }]
  
})
export class NomSalaValidatorDirective implements Validator{

  constructor(public salaService: SalaService) { }

  validate(control: AbstractControl) : {[key: string]: any} | null {


    if (!(this.isValidName(control.value))) {
      return { 'nomSalaInvalid': true };
    }
    return null;
  }

  isValidName(value:any){
    let isValid = true;
    this.salaService.listSalas.forEach(
      (element) =>{
        if((element.Nombre).toUpperCase() == value.toUpperCase()){
          isValid = false;
        }
      }
      
    );
    return isValid;

  }


}
