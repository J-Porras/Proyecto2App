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

  //solo se valida si se cambiado el valor por default ->"dirty" o si se "salido" del campo -> "touched"
  validate(control: AbstractControl) : {[key: string]: any} | null {
    if(control.dirty || control.touched){
      if (!(this.isValidName(control.value))) {
        return { 'nomSalaInvalid': true };
      }
      return null;
    }
    return { 'nomSalaInvalid': false };


      
  }

  //valida que el nombre no este repetido sin importar la 
  //cantidad de espacios vacios o que solo sea espacios

  isValidName(value:any){
    let isValid = true;
    this.salaService.listSalas.forEach(
      (element) =>{
        if((element.Nombre).toUpperCase().replace(/\s+/g, '') == value.toUpperCase().replace(/\s+/g, '')
          || !value.replace(/\s+/g, '').length){
          isValid = false;
        }
        
      }
    );
    return isValid;
  }


}
