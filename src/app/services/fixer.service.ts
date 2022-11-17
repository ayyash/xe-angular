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
    private _convertUrl = Config.API.fixer.convert;
    private _detailsUrl = Config.API.fixer.details;

    constructor(private _http: HttpClient) {

    }

    // TODO: save in storage for 24 hours
    // VER_NEXT: what if I get all rates to USD and do all the calculations in the browser
    GetFixers(options: IListOptions = {}): Observable<IFixer[]> {
        const params = GetParamsAsString(ListOptions.MapListOptions(options), true);
        const _url = this._listUrl.replace(':options', params);

        return this._http.get(_url).pipe(
            map(response => {
                return Fixer.NewInstances(<any>response);
            })
        );
    }

    Convert(options: IListOptions = {}): Observable<IFixer> {
      const params = GetParamsAsString(ListOptions.MapConvertOptions(options), true);
        const _url = this._convertUrl.replace(':options', params);
        return this._http.get(_url).pipe(
            map(response => {
                return Fixer.NewInstance(<any>response, options.to);
            })
        );
    }


    GetFixer(code: string): Observable<IFixer> {
      // what is this supposed to return, nothing, historical data maybe?
        const _url = this._detailsUrl.replace(':code', code);
        return this._http.get(_url).pipe(
            map(response => {
                return Fixer.NewInstance(response);
            })
        );

    }


}
