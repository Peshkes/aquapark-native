export type Role = 'admin' | 'employee';

export type User = {
    accessToken: string
    refreshToken: string
    roles: Array<Role>
} | null;

export type LoginData = {
    login: string
    password: string
}

export interface RegistrationAnswer {
    name: string,
    roles: Array<Role>
}

