import axios from 'axios';

const sinosApi = axios.create({ 
    baseURL: 'https://admin.sinos.art.br'
});

const bossaApi = axios.create({ 
    baseURL: 'https://backend.bossacriativa.art.br/'
});

const unoApi = axios.create({ 
    baseURL: 'https://admin.umnovoolhar.art.br'
});

export {sinosApi, bossaApi, unoApi};