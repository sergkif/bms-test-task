import store from "../store/index"
import httpClient from "../utils/httpClient"

async function getPersonList(params) {
  return httpClient
    .post("/persons", params)
    .then((response) => {
      if (response.status === 200) {
        return response.data
      }
    })
    .then((data) => {
      if (data) {
        return data
      }
    })
}

async function getPerson(id) {
  return httpClient
    .get("/persons/" + id)
    .then((response) => {
      if (response.status === 200) {
        return response.data
      }
    })
    .then((data) => {
      if (data) {
        return data
      }
    })
    .catch((err) => {
      return {status: 404}
    })
}

export {
  getPersonList,
  getPerson
}