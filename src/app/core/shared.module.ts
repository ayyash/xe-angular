import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdInputModule } from '../lib/mdinput/mdinput.module';
import { LibModule } from '../lib/lib.module';
import { DialogModule } from '../lib/dialog';
import { DataPartialComponent } from '../components/common/data.partial';

@NgModule({
    imports: [CommonModule, MdInputModule, LibModule, DialogModule],
    declarations: [
        DataPartialComponent,
    ],
    exports: [
        DataPartialComponent,
        CommonModule,
        FormsModule,
        MdInputModule,
        LibModule,
        DialogModule,
        ReactiveFormsModule]
})
export class SharedModule { }
