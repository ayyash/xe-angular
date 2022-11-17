import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { distinctUntilChanged, Observable, switchMap } from 'rxjs';
import { Config } from '../../config';
import { DataService, FixerService, ConvertState, IFixer } from '../../core/services';
import { Toast } from '../../lib/toast/toast.state';
import { IConvert } from '../../services/convert.state';
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
   convertState$: Observable<IConvert>;

   constructor(private fixerService: FixerService, private convertState: ConvertState, private toast: Toast) {
      //
   }
   ngOnInit(): void {
      this.convertState$ = this.convertState.stateItem$;

      // get base from elsewhere, keep state
      this.rates$ = this.convertState.stateItem$.pipe(
         distinctUntilChanged((prev, next) => {
            // catch if amount or current base change
            return prev.amount === next.amount && prev.currentBase === next.currentBase;
         }),
         switchMap(state => this.fixerService.GetFixers({ symbols: Config.FixerSettings.MostPopular, base: state.currentBase }))
      );

   }
}
