import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// inject:importlibs
import { BgDirective } from './directives/bg.directive';
import { ExpandsDirective } from './directives/expands.directive';
import { LetDirective } from './directives/let.directive';
import { ModalDirective } from './directives/modal.directive';
import { DayNamePipe } from './pipes/dayname.pipe';
import { PrettyPricePipe } from './pipes/prettyprice.pipe';
import { PrettyTimePipe } from './pipes/prettytime.pipe';
import { RelativeTimePipe } from './pipes/relativetime.pipe';
import { ResPipe } from './pipes/res.pipe';
// endinject


@NgModule({
    imports: [CommonModule],
    declarations: [
         // inject:libs
        BgDirective,
        ExpandsDirective,
        LetDirective,
        ModalDirective,
        DayNamePipe,
        PrettyPricePipe,
        PrettyTimePipe,
        RelativeTimePipe,
        ResPipe
        // endinject
    ],
    exports: [
         // inject:libs
        BgDirective,
        ExpandsDirective,
        LetDirective,
        ModalDirective,
        DayNamePipe,
        PrettyPricePipe,
        PrettyTimePipe,
        RelativeTimePipe,
        ResPipe
        // endinject
    ]
})
export class LibModule { }
