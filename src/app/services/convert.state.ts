import { Injectable } from '@angular/core';
import { StateService } from './state.abstract';

export interface IConvert {
    currentBase: string;
    to: string;
    amount?: number;
}
@Injectable({providedIn: 'root'})
export class ConvertState extends StateService<IConvert> {
   constructor(){
      super('none');
   }
}

