import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, Observable, switchMap, tap } from 'rxjs';
import { Toast } from '../../lib/toast/toast.state';
import { EnumDataType } from '../../models/data.model';
import { IFixer } from '../../models/fixer.model';
import { DataService } from '../../services/data.service';
import { FixerService } from '../../services/fixer.service';
import { DataPartialComponent } from '../common/data.partial';

@Component({

   templateUrl: './details.html',
   changeDetection: ChangeDetectionStrategy.OnPush,
   standalone: true,
   imports: [CommonModule, DataPartialComponent]
})
export class RateDetailsComponent implements OnInit {

   code$: Observable<string>;
   enumDataType = EnumDataType;


   constructor(
      private route: ActivatedRoute,
      private toast: Toast,
      private fixerService: FixerService) {
      //
   }
   ngOnInit(): void {
      this.code$ = this.route.paramMap.pipe(
         map(params => params.get('code'))
      );
   }
}
