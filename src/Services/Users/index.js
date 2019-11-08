import http from '../HTTP/http';

const Joi = require('@hapi/joi');

const schemaData = Joi.object({
    page: Joi.number()
        .min(1)
        .max(3),
    per_page: Joi.number(),
    total: Joi.number(),
    total_pages: Joi.number(),
    data: Joi.array().items(
        Joi.object({
            id: Joi.number(),
            email: Joi.string(),
            first_name: Joi.string(),
            last_name: Joi.string(),
            avatar: Joi.string(),
        }),
    ),
});
class Users {
    static validate(data) {
        const { error } = schemaData.validate(data);
        return error;
    }

    static getUsers() {
        return http
            .get('https://reqres.in/api/users?page=1')
            .then((res) => res.data)
            .catch((error) => error);
    }

    static getPlainUsers() {
        return http
            .get('https://reqres.in/api/users?page=1')
            .then((res) => {
                const newList = res.data.map(Object.values);
                return newList;
            })
            .catch(() => []);
    }

    static getMoreUsers() {
        return http
            .get('https://reqrs.in/api/users?page=1')
            .then((res) => Promise.resolve(res.data))
            .catch(() => Promise.resolve([]));
    }

    static getInvalidUsers() {
        return http
            .get('https://reqres.in/api/users?page=5')
            .then((data) => {
                const error = Users.validate(data);
                if (error !== undefined) {
                    return Promise.reject(new Error(
                        error,
                    ));
                }
                return Promise.resolve(data);
            })
            .catch((error) => Promise.reject(error.message));
    }
}

export default Users;
