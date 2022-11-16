import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IConfig } from '../core/services';



export const configFactory = (config: ConfigService) => () => {
    return config.loadAppConfig();
};

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    constructor(
        private http: HttpClient
    ) {
    }

    private _getUrl = Config.API.config.local;

    // keep track of config
    private config = new BehaviorSubject<IConfig>(Config as IConfig);
    config$: Observable<IConfig> = this.config.asObservable();

    private static _config: IConfig;

    static get Config(): IConfig {
        return this._config || Config;
    }

    private NewInstance(config: any, withError: boolean): IConfig {
        // cast all keys as are
        const _config = { ...Config, ...<IConfig>config };
        _config.Storage = { ..._config.Storage };
        _config.isServed = true;
        _config.withErrors = withError; // so now we can distinguish where the config really came from

        // populate static element
        ConfigService._config = _config;

        this.config.next(_config);
        return _config;
    }

    loadAppConfig(): Observable<boolean> {


        return this.http.get(this._getUrl).pipe(
            map((response) => {
                this.NewInstance(response, false);

                _seqlog('LoadAppConfig');
                return true;
            }),
            catchError((error) => {
                // if in error, return set fall back from environment
                // make it served, if you want to distinguish error, create another flag
                this.NewInstance(Config, true);
                _debug(error, 'Error in resolve', 'e');
                return of(true);
            })
        );
    }
}

