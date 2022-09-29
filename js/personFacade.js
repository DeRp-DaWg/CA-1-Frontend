const URL = "http://localhost:3000/person/"

function getPersons() {
    return fetch(URL)
    .then(handleHttpErrors)
}

function makeOptions(method, body) {
    const opts = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body)
    }
    return opts
}

function handleHttpErrors(res) {
    if(!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json()
}

const personFacade = {
    getPersons
}

export default personFacade
