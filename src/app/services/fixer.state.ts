import { Injectable } from '@angular/core';
import { IFixer } from '../models/fixer.model';
import { StateService } from './state.abstract';

export interface ISomething {
    currentBase: string;
    to: string;
    amount?: number;
}
@Injectable({providedIn: 'root'})
export class FixerState extends StateService<ISomething> {}

