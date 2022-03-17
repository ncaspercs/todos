//const axios = require('axios')
import _axios from 'axios'
const axios = _axios.create()

export async function getTodoList() {
    //console.log(`${process.env.TODO_SERVICE}`)
    const result = await axios.get(`${window.env.API_URL}/todos`)
    const data = await result.data;
  /*   console.log(data) */
  
    if (result.status >= 400) {
      throw new Error(data.errors);
    }
    return data;
  }