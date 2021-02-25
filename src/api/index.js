import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://colabdevs-kanban-api.herokuapp.com'
  });


export default Api;