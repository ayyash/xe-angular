import { keys } from '../../locale/resources';



export class Res {

    public static Get(key: string, fallback?: string): string {
        // if found return else generic


        if (keys[key]) {
            return keys[key];
        }

        return fallback || keys.NoRes;
    }



    public static RelativeTime(key: string, value: number): string {


        // no more const ret = keys.RELATIVE_TIME.AGO; // {0} ago
        let factor = 11;
        if (value <= 1) {
            factor = 1;
        } else if (value <= 2) {
            factor = 2;
        } else if (value < 11) {
            factor = 3;
        }
        return keys.RELATIVE_TIME[key][factor].replace('$0', value);
    }
    public static Plural(key: string, count: number): string {


        // get main key, which will have its own counts in both languages
        // 0: none, 1: singlular, 2: dual, 3: plural, 10: singular
        // or 1: single, 2: plural
        let factor = 11;
        if (count <= 0) {
            factor = 0;
        } else if (count <= 1) {
            factor = 1;
        } else if (count <= 2) {
            factor = 2;
        } else if (count < 11) {
            factor = 3;
        }

        return keys[key][factor].replace('$0', count);
    }
}
