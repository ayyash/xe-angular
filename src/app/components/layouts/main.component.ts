import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    templateUrl: './main.component.html',
    standalone: true,
    imports: [CommonModule, RouterModule]
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }



}
