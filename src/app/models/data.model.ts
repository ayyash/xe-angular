// a model for autcomolete data

export interface IData {
    value: string | null;
    id?: string | null;
    key?: string;


}

export enum EnumDataType {
    NotDefined,
    CurrSymbol
}


export class DataClass implements IData {
    constructor(
        public value: string | null,
        public id?: string | null,
        public key?: string

    ) {

    }

    public static NewInstance(data: any): IData | any {
        // according to name define properties
        // if data is null return null values
        if (data === null) {
            return null;
        }
        return {
            id: data.id,
            value: data.value,
            key: data.key
        };
    }
    public static NewInstances(data: any[]): IData[] {

        return data.map(n => DataClass.NewInstance(n));
    }

}

export class CurrSymbol extends DataClass {

    public static NewInstances(data: any): IData[] | null {
        // map to IData from
        /*
        {
            "success": true,
            "symbols": {
                "AED": "United Arab Emirates Dirham",
                "AFN": "Afghan Afghani",
                "ALL": "Albanian Lek",
                "AMD": "Armenian Dram",
                [...]
                }
            }
        */
        if (data === null || !data.symbols) {
            return null;
        }
        return Object.keys(data.symbols).map(n => {
            return {
                id: '',
                key: n,
                value: data.symbols[n]
            };
        });

    }
}
