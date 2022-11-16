import { HttpErrorResponse } from '@angular/common/http';

export interface IUiError {
    code: string;
    message?: string;
    internalMessage?: string;
    status?: number;
    uiMessage?: string;
}

export const UiError = (error: any): IUiError => {
    let e: IUiError = {
        code: error.type || 'UNKNOWN',
        message: error.info,
        status: error.code || 0
    };

    return e;
};
