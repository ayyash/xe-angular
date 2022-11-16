import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Config } from '../../config';
import { FixerState, ISomething } from '../../services/fixer.state';
import { ConvertFormPartialComponent } from '../convert/form.partial';
import { RateListPartialComponent } from '../rate/list.partial';
@Component({

    templateUrl: './home.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RateListPartialComponent, ConvertFormPartialComponent]
})
export class PublicHomeComponent implements OnInit {


    constructor(private fixerState: FixerState ) {
        //
    }
    ngOnInit(): void {
        // initiaize
        this.fixerState.SetState({
            currentBase: Config.Basic.BaseCurrency,
            to: 'EUR',
            amount: 1
        });
    }
    update(state: ISomething) {
        this.fixerState.UpdateState(state);
    }

}
