import http from '../HTTP/http';

class Users {
    static getUsers() {
        return http
            .get('https://reqres.in/api/users?page=1')
            .then((res) => res.data)
            .catch((err) => err);
    }
}

export default Users;
