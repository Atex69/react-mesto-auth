class Api {
    constructor({url, headers}) {
        this._url = url;
        this._headers = headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`${res.status} ${res.statusText}`);
        }
    }

    getUserData() {
        const requestUrl = this._url + '/users/me';
        return fetch(requestUrl, {
            headers: this._headers,
        }).then(this._handleResponse);
    }

    getInitialCards() {
        const requestUrl = this._url + '/cards';
        return fetch(requestUrl, {
            headers: this._headers,
        }).then(this._handleResponse);
    }

    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        }).then(this._handleResponse)
    }

    addNewCard(data) {
        const requestUrl = this._url + '/cards';
        return fetch(requestUrl, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        }).then(this._handleResponse);
    }

    deleteCard(data) {
        const requestUrl = this._url + `/cards/${data._id}`;
        return fetch(requestUrl, {
            method: 'DELETE',
            headers: this._headers,
        }).then(this._handleResponse);
    }

    addLike(cardId) {
        const requestUrl = this._url + `/cards/likes/${cardId}`;
        return fetch(requestUrl, {
            method: 'PUT',
            headers: this._headers,
        }).then(this._handleResponse);
    }

    deleteLike(cardId) {
        const requestUrl = this._url + `/cards/likes/${cardId}`;
        return fetch(requestUrl, {
            method: 'DELETE',
            headers: this._headers,
        }).then(this._handleResponse);
    }

    sendAvatar(data) {
        const requestUrl = this._url + `/users/me/avatar`;
        return fetch(requestUrl, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar_link
            })
        }).then(this._handleResponse);
    }
    }

const api = new Api({
    url: "https://nomoreparties.co/v1/cohort-57/",
    headers: {
        authorization: "ad54961e-3f85-45c8-ba7a-70af841df2af",
        "Content-Type": "application/json",
    },
})

export default api;