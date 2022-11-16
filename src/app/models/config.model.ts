
export interface IConfig {
    isServed: boolean;
    withErrors?: boolean;
    API: {
        apiRoot: string;
        key: string;
    };
    Auth: {
        userAccessKey: string;
    };
    Storage: {
        Timeout: number;
        Key: string;
        ResetKey: string;
    }

}
