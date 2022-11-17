import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Config } from '../../config';
import { ConvertState, IConvert } from '../../services/convert.state';
import { ConvertFormPartialComponent } from '../convert/form.partial';
import { ConvertResultPartialComponent } from '../convert/result.partial';
import { RateListPartialComponent } from '../rate/list.partial';
@Component({

   templateUrl: './home.html',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [RateListPartialComponent, ConvertFormPartialComponent, ConvertResultPartialComponent]
})
export class PublicHomeComponent implements OnInit {


   defaultState: IConvert;
   constructor(private convertState: ConvertState) {
      //
   }
   ngOnInit(): void {
      // initiaize
      this.defaultState = {
         currentBase: Config.FixerSettings.BaseCurrency,
         to: Config.FixerSettings.defaultTo,
         amount: Config.FixerSettings.defaultAmount
      };
      this.convertState.SetState(this.defaultState);
   }
   update(state: IConvert) {
      // call API then update state
      this.convertState.UpdateState(state);
   }

}
