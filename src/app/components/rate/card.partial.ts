import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IFixer } from '../../core/services';

@Component({
    selector: 'xe-rate-card',
    templateUrl: './card.partial.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule]
})
export class RateCardPartialComponent implements OnInit {
    @Input() rate: IFixer;
    result: number;

    @Input() set amount(value:number) {
        // TODO: cleanup number
        this.result = this.rate.xeRate * value;
    }

    constructor() {
        //
    }
    ngOnInit(): void {
        //
    }
}
