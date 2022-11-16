import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { DataService, IData } from '../../core/services';
import { Toast } from '../../lib/toast/toast.state';

@Component({
    selector: 'xe-rate-list',
    templateUrl: './list.partial.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class RateListPartialComponent implements OnInit {

    rates$: Observable<IData[]>;
    constructor(private dataService: DataService, private toast: Toast) {
        //
    }
    ngOnInit(): void {
        this.rates$ = this.dataService.GetSymbols().pipe(
            catchError(e => this.toast.HandleUiError(e))
        );
    }
}
