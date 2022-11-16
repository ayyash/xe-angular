import { Config } from '../config';

// key and value
export interface IFixer {
    key: string;
    xeRate?: number;

}

export class Fixer implements IFixer {
    public key: string;

    public static NewInstances(fixers: any, key: string = Config.Basic.BaseCurrency): IFixer[] {
        // turn into array
        /*
        {
            "base": "USD",
            "date": "2022-11-16",
            "rates": {
                "AUD": 1.474513,
                "CAD": 1.324225,
                "EUR": 0.95945,
                "TRY": 18.614498
            },
            "success": true,
            "timestamp": 1668594903
            }
        */
        if (fixers.rates) {
            return Object.keys(fixers.rates).map(n => {
                return {
                    key: n,
                    xeRate: fixers.rates[n],
                };
            });
        }
        return [];
    }



}
