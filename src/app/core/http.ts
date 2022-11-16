import { Observable, throwError } from 'rxjs';
import { finalize, shareReplay, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpHeaders,
    HttpParams
} from '@angular/common/http';
import { ConfigService, LoaderService } from './services';
import { catchAppError, debug } from './rxjs.operators';


@Injectable()
export class XeInterceptor implements HttpInterceptor {
    private isRefreshingToken = false;
    // tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor(private loaderService: LoaderService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('localdata') > -1) {
            // pass through
            return next.handle(req);
        }
        const url = ConfigService.Config.API.apiRoot + req.url;


        const adjustedReq = req.clone({ url: url,  setHeaders: this.setHeader()});
        this.loaderService.show();

        if (req.body) {
            _debug(req.body, `Request ${req.method} ${req.urlWithParams}`, 'p');
        }

        return next
            .handle(adjustedReq)
            .pipe(
                shareReplay(),
                map(response => this.mapData(response)),
                finalize(() => {
                    this.loaderService.hide();
                }),
                debug(`${req.method} ${req.urlWithParams}`, 'p'),
                catchAppError(`${req.method} ${req.urlWithParams}`)
            );

    }
    private setHeader(): any {
        return {apikey: ConfigService.Config.API.key};
    }

    private mapData(response: any) {
        // if sucess is false throw
        if (response instanceof HttpResponse) {

            if (response.body && !response.body.success) {
                throw response.body.error;
            }
        }
        return response;
    }

}
