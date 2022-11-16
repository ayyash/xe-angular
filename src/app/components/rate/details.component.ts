import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({

    templateUrl: './details.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule]
})
export class RateDetailsComponent implements OnInit {
    constructor() {
        //
    }
    ngOnInit(): void {
        //
    }
}
