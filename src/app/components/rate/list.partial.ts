import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { catchError, Observable, switchMap } from 'rxjs';
import { Config } from '../../config';
import { DataService, FixerService, IData, IFixer } from '../../core/services';
import { Toast } from '../../lib/toast/toast.state';
import { RateCardPartialComponent } from './card.partial';

@Component({
    selector: 'xe-rate-list',
    templateUrl: './list.partial.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, RouterModule, RateCardPartialComponent]
})
export class RateListPartialComponent implements OnInit {

    rates$: Observable<IFixer[]>;
    constructor(private fixerService: FixerService, private dataService: DataService, private toast: Toast) {
        //
    }
    ngOnInit(): void {
        // get base from elsewhere, keep state

        this.rates$ = this.fixerService.GetFixers({symbols: Config.Basic.MostPopular, base: Config.Basic.BaseCurrency});
    }
}
