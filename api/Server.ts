
export type Role = 'admin' | 'employee';
export interface Answer {
    name: string,
    role: Role
}

interface User extends Answer{
    id: string,
    login: string,
    password: string,
}

export class Server {
    //mock data
    private dataArray: User[] = [
        {id: '1sad-sdaw2-faef4', login: 'admin', password: '7761', name: 'Valeriy', role: "admin"},
        {id: '4fha-s24d-asd9', login: 'boris', password: '2705', name: 'Boris', role: "admin"},
        {id: 'aglp2-aaaw5-98s9', login: 'employee', password: '1234', name: 'Boris', role: "admin"},
    ]
    logIn = async (login: string, password: string) => {
        const ui = this.dataArray.findIndex(item => item.login === login);
        if (this.dataArray[ui].login === login && this.dataArray[ui].password === password)
            return {name: this.dataArray[ui].name, role: this.dataArray[ui].role}
    }
}