
class AppConfig {
    readonly port: number = 4000
    readonly routePrefix = "/api/v1";

    readonly dbConfig = {
        host: "localhost",
        port: 3306,
        user: 'root',
        password: "",
        database: 'server_management_app'
    }
}

export const appConfig = new AppConfig()