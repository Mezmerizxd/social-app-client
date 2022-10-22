// Classes
import Auth from './Auth';

class Api {
    ApiUrl: string;

    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.ApiUrl = 'http://mezmerizxd.net/api';
        } else {
            this.ApiUrl = 'http://localhost/api';
        }
    }

    public async POST<T = any>(url: string, data?: any): Promise<T> {
        return await fetch(this.ApiUrl + url, {
            method: 'POST',
            body: data ? JSON.stringify(data) : null,
            headers: {
                'Content-Type': 'application/json',
                Authorization: Auth.getInstance().authToken,
            },
        }).then((response) => {
            return response.json();
        });
    }

    public async GET<T = any>(url: string): Promise<T> {
        return await fetch(this.ApiUrl + url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: Auth.getInstance().authToken,
            },
        }).then((response) => {
            return response.json();
        });
    }

    public async PUT<T = any>(url: string, data?: any): Promise<T> {
        return await fetch(this.ApiUrl + url, {
            method: 'PUT',
            body: data ? JSON.stringify(data) : null,
            headers: {
                'Content-Type': 'application/json',
                Authorization: Auth.getInstance().authToken,
            },
        }).then((response) => {
            return response.json();
        });
    }

    public async DELETE<T = any>(url: string): Promise<T> {
        return await fetch(this.ApiUrl + url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: Auth.getInstance().authToken,
            },
        }).then((response) => {
            return response.json();
        });
    }
}

export default new Api();
