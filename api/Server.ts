import {LoginData, RegistrationData} from "../utils/types";
import {serverUrl} from "../utils/constants";

type RequestOptions = {
    method: string,
    headers: Headers,
    body: string,
    redirect: RequestRedirect
}

export class Server {
    private static async sendRequest(endpoint: string, data: Record<string, any>): Promise<any> {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(data);

        const requestOptions: RequestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch(`${serverUrl}${endpoint}`, requestOptions);
        const responseBody = await response.text();
        const result = await JSON.parse(responseBody);

        if (response.ok) {
            return result;
        } else {
            throw new Error(`Fetch ${result.status}:${result.message}`);
        }
    }

    static login = async (loginData: LoginData) => {
        const data = {
            "username": loginData.login,
            "password": loginData.password
        };

        return Server.sendRequest('/guest/authentication', data);
    }

    static registration = async (regData: RegistrationData) => {
        const data = {
            "name": regData.name,
            "email": regData.login,
            "password": regData.password,
            "roleId": regData.roleId.toString()
        };

        return Server.sendRequest('/guest/create-account', data);
    }
}
