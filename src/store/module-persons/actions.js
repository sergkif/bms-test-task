import { getPersonList, getPerson } from "../../api/person";

export function setPersonList ({commit}, params) {
  getPersonList(params).then((data) => {
    commit("SET_PERSON_LIST", data)
  })
}

export function setPerson ({commit}, id) {
  let status = getPerson(id).then((data) => {
    if(data.status === 404) return data.status
    commit("SET_PERSON", data)
  })
  return status
}
