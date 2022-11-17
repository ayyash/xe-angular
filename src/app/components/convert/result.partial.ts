import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { distinctUntilChanged, Observable, switchMap, tap } from 'rxjs';
import { PrettyPricePipe } from '../../lib/pipes/prettyprice.pipe';
import { IFixer } from '../../models/fixer.model';
import { FixerService } from '../../services/fixer.service';
import { ConvertState } from '../../services/convert.state';

@Component({
   selector: 'xe-convert-result',
   templateUrl: './result.partial.html',
   changeDetection: ChangeDetectionStrategy.OnPush,
   standalone: true,
   imports: [CommonModule, RouterModule, PrettyPricePipe]
})
export class ConvertResultPartialComponent implements OnInit {



   rate$: Observable<IFixer>;
   currentBase: string;

   constructor(private convertState: ConvertState, private fixerService: FixerService) {
      //
   }
   ngOnInit(): void {
      this.rate$ = this.convertState.stateItem$.pipe(
         tap(state => this.currentBase = state.currentBase),
         distinctUntilChanged(),
         switchMap(state => this.fixerService.Convert({ from: state.currentBase, to: state.to, amount: state.amount }))
      );
   }
}
