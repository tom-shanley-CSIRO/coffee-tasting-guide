import axios from 'axios'
const url = 'http://localhost:0207/api'

export default class API {
  static async getCoffee() {
    const res = await axios.get(url + '/coffee')
    return res.data
  }
}
