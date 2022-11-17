// for page state
import { BehaviorSubject, Observable } from 'rxjs';
import { clone } from '../core/common';
import { debug } from '../core/rxjs.operators';


export class StateService<T>  {

    protected stateItem: BehaviorSubject<T | null> = new BehaviorSubject(null);
    stateItem$: Observable<T | null> = this.stateItem.asObservable();

    constructor(level?: string) {

        if (!level) {
            // default debug
            this.stateItem$ = this.stateItem$.pipe(
                debug(this.constructor.name)
               );
        }

    }

    get currentItem(): T | null {

        return this.stateItem.getValue();
    }

    // return ready observable
    SetState(item: T): Observable<T | null> {
        this.stateItem.next(item);
        return this.stateItem$;
    }

    UpdateState(item: Partial<T>): Observable<T | null> {
        // extend the item first
        const newItem = { ...this.currentItem, ...clone(item) };
        this.stateItem.next(newItem);
        return this.stateItem$;
    }

    RemoveState(): void {
        this.stateItem.next(null);
    }
}
