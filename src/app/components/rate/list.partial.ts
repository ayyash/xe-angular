import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, switchMap} from 'rxjs';
import { Config } from '../../config';
import { DataService, FixerService, FixerState, IFixer } from '../../core/services';
import { Toast } from '../../lib/toast/toast.state';
import { ISomething } from '../../services/fixer.state';
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
    fixerState$: Observable<ISomething>;

    constructor(private fixerService: FixerService, private fixerState: FixerState, private toast: Toast) {
        //
    }
    ngOnInit(): void {
        this.fixerState$ = this.fixerState.stateItem$;

        // get base from elsewhere, keep state
        this.rates$ = this.fixerState.stateItem$.pipe(
            switchMap(state => this.fixerService.GetFixers({symbols: Config.Basic.MostPopular, base: state.currentBase}))
        );

    }
}
