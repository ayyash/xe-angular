import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService, IData, IViewMode} from '../../core/services';
import { MdInputModule } from '../../lib/mdinput/mdinput.module';
import { Toast } from '../../lib/toast/toast.state';
import { ISomething } from '../../services/fixer.state';


@Component({
    selector: 'xe-convert-form',
    templateUrl: './form.partial.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, MdInputModule]
})
export class ConvertFormPartialComponent implements OnInit {

    // Add types

    @Output() onSave: EventEmitter<ISomething> = new EventEmitter<ISomething>();

    forceValidation = false;
    convertForm: FormGroup;

    currencies$: Observable<IData[]>;

    constructor(private fb: FormBuilder, private toast: Toast, private dataService: DataService) {
        //
    }
    ngOnInit(): void {
        // get cached currencies list
        this.currencies$ = this.dataService.GetSymbols();

        // TODO: set defaults
        this.convertForm = this.fb.group({
            currentBase: [],
            to: [],
            amount: []
        });
    }

    // use to compare for initial select... keep '=='
    compareFn(c1: any, c2: any): boolean {
        // tslint:disable-next-line:triple-equals
        return c1 && c2 ? c1.key == c2.key : false;
    }

    saveConvert(): void {
        this.forceValidation = false;
        this.toast.Hide();


        if (this.convertForm.valid) {
            // emit a state object

            const _value = this.convertForm.value;

            // then emit
            this.onSave.emit(_value);
        } else {
            this.forceValidation = true;
            this.toast.Show('INVALID_FORM', {  extracss: 'error' });
        }
    }
}
