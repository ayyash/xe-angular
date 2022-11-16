import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class XeErrorHandler implements ErrorHandler {

    handleError(error: any) {
        // TODO: log

        _debug(error, 'Unhandled Error', 'e');

    }
}
