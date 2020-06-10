import { Directive } from '@angular/core';
import { ValidationErrors, AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { CovidService } from '../services/covid.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
    selector: '[healthCodeValidator]',
    providers: [{
        provide: NG_ASYNC_VALIDATORS, useExisting: HealthCodeValidator, multi:
            true
    }]
})

export class HealthCodeValidator implements AsyncValidator {

    constructor(private covid_service: CovidService) { }

    validate(control: AbstractControl): Observable<ValidationErrors | null> {

        return this.covid_service.check_health_code(control.value).pipe(map((isNotUsed) => {
            
            return isNotUsed ? null : { healthCodeValidator: true }
        }));
    }
}