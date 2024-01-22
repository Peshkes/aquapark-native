import {LoginData} from "../utils/types";
import {serverUrl} from "../utils/constants";

type RequestOptions = {
    method: string,
    headers: Headers,
    body: string,
    redirect: RequestRedirect
}

export class Server {

    static login = async (loginData: LoginData) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "username": loginData.login,
            "password": loginData.password
        });

        const requestOptions: RequestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch(`${serverUrl}/guest/authentication`, requestOptions);
        const responseBody = await response.text();
        const result = await JSON.parse(responseBody);
        if (response.ok){
            return result;
        } else {
            throw new Error(`Fetch ${result.status}:${result.message}`);
        }
    }
}