/* globals $, Promise */

export default class Requester {
    _send(method, url, options) {
        'use strict';
        options = options || {};

        let headers = options.headers || {};
        let data = options.data || undefined;

        const promise = new Promise(function(resolve, reject) {
            $.ajax({
                url: url,
                async: true,
                method: method,
                contentType: 'application/json',
                headers: headers,
                data: JSON.stringify(data),
                success: function(res) {
                    resolve(res);
                },
                error: function(err) {
                    reject(err);
                }
            });
        });
        return promise;
    }

    get(url, options) {
        return this._send('GET', url, options);
    }

    post(url, options) {
        return this._send('POST', url, options);
    }

    put(url, options) {
        return this._send('PUT', url, options);
    }

    del(url, options) {
        return this._send('POST', url, options);
    }
}
