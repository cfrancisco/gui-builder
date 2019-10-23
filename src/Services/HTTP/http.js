import axios from 'axios';

class ClassHttp {
    constructor() {
        this.http = null;
    }

    init(timeout = 5000, uri = '') {
        this.http = axios.create({
            baseURL: uri,
            timeout,
        });
    }

    setAuthToken(jwt) {
        this.http = axios.create({
            baseURL: this.endpoint,
            timeout: this.timeout,
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
        });
    }

    get(endpoint) {
        return this.http
            .get(endpoint)
            .then((response) => {
                const { data } = response;
                return Promise.resolve(data);
            })
            .catch((error) => {
                const { message } = error;
                return Promise.reject(message);
            });
    }

    post(endpoint, data) {
        return this.http
            .post(endpoint, data)
            .then((response) => {
                const { res } = response;
                return Promise.resolve(res);
            })
            .catch((error) => {
                const { message } = error;
                return Promise.reject(message);
            });
    }
}

const http = new ClassHttp();
http.init();

export default http;
