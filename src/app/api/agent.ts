import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://localhost:7065/api/";
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
};

const Category = {
    list: () => requests.get("categories"),
    details: (id: number) => requests.get(`categories/${id}`),
};

const Basket = {
    get: () => requests.get("basket"),
    addItem: (dishId: number, quantity = 1) => requests.post(`basket?dishId=${dishId}&quantity=${quantity}`, {}),
    removeItem: (dishId: number, quantity = 1) => requests.delete(`basket?dishId=${dishId}&quantity=${quantity}`),
};

const agent = {
    Category,
    Basket,
};

export default agent;
