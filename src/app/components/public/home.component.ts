import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RateListPartialComponent } from '../rate/list.partial';
@Component({

    templateUrl: './home.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RateListPartialComponent]
})
export class PublicHomeComponent implements OnInit {


    constructor( ) {
        //
    }
    ngOnInit(): void {
        //
    }

}
