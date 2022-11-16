import { environment } from '../environments/environment';


export const Config = {
    isServed: false,
    Basic: {
        defaultRoute: '/',
        defaultSize: 25,
        defaultDateFormt: 'DD-MM-YYYY',
        defaultToastTimeout: 5000,
        BaseCurrency: 'USD',
        MostPopular: ['GBP','AUD','EUR','JPY','CAD','CHF','RUB','NZD','TRY']
    },
    Auth: {
        userAccessKey: 'cricket.user'
    },
    Storage: {
        Timeout: 24, // hours
        Key: 'localkey',
        ResetKey: '20180220'
    },

    API: {
        apiRoot: environment.apiRoot,
        key: environment.accessKey,
        apiVersion: 1,
        data: {
            symbols: '/symbols'
        },
        config: {
            local: environment.localConfig
        }
         , fixer: {
    list: '/latest?:options',
    details: '/fixers/:id',
    create: '/fixers', // POST
    save: '/fixers/:id', // PUT
    delete: '/fixers/:id', // DELETE
}

// **gulpmodel**
    }
};

