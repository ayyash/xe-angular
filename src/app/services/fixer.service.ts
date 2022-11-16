import { Injectable } from '@angular/core';
import { Config } from '../config';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetParamsAsString } from '../core/common';
import { IFixer, Fixer, IListOptions, ListOptions } from '../core/services';



@Injectable({providedIn: 'root'})
export class FixerService {

    private _listUrl = Config.API.fixer.list;
    private _detailsUrl = Config.API.fixer.details;

    constructor(private _http: HttpClient) {

    }

    GetFixers(options: IListOptions = {}): Observable<IFixer[]> {
        const params = GetParamsAsString(ListOptions.MapListOptions(options), true);
        const _url = this._listUrl.replace(':options', params);

        return this._http.get(_url).pipe(
            map(response => {
                return Fixer.NewInstances(<any>response);
            })
        );
    }


    // GetFixer(id: string): Observable<IFixer> {
    //     const _url = this._detailsUrl.replace(':id', id);
    //     return this._http.get(_url).pipe(
    //         map(response => {
    //             return Fixer.NewInstance(response);
    //         })
    //     );

    // }


}
