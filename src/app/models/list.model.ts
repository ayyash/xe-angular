


// map params
export interface IListOptions {
    symbols?: string[];
    base?: string;
    date?: string; // YYYY-MM-DD
    from?: string;
    to?: string;
    start_date?: string;
    end_date?: string;
}


export class ListOptions {
    public static MapListOptions(options: IListOptions): any {
        // map each to its name in db, watch out for arrays
        return {

            symbols: options.symbols,
            base: options.base

        };
    }
}
