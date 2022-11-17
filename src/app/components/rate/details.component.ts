import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { EnumDataType } from '../../models/data.model';
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
      private route: ActivatedRoute) {
      //
   }
   ngOnInit(): void {
      this.code$ = this.route.paramMap.pipe(
         map(params => params.get('code'))
      );
   }
}
