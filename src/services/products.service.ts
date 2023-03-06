
import axios from "axios";
import { handleError, handleResponse } from "./response.handler";

export const productsService = {
    getProducts
};

async function getProducts(url: string) {
    return axios({
        method: "get",
        url,
        timeout: 30000,
        headers: {
        "Access-Control-Allow-Origin": "*"
        }
    })
        .then((response: any) => {
        return handleResponse(response);
        })
        .catch((error: any) => {
        return handleError(error);
    });
}

