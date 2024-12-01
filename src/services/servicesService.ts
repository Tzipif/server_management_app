import runQuery from "../db/dal";

type serviceModel = {
    id: number;
    name: string;
    ip: string;
    hostingCompany_id: number;
    status: boolean;
    createdTime: string;
    companny_name: string;
}

export async function getAllServices(): Promise<serviceModel[]> {

    const res = await runQuery(`
    SELECT server.id, server.name, server.ip, server.status, server.createdTime, hostingCompanie.id AS hostingCompanieId
    FROM server
    JOIN hostingCompanie ON server.hostingCompany_id = hostingCompanie.id
    `);

    console.log(res);

    return res;
}

export async function updateService(id: number, status: boolean): Promise<void> {
    try {
        console.log("Updating service:", { id, status });
        await runQuery(`
            UPDATE server
            SET status = ${status}
            WHERE id = ${id}
        `);
    } catch (error) {
        console.error("Error updating service:", error);
        throw error;  // העברת השגיאה הלאה כדי שהיא תגיע למי שמטפל ב-Express
    }
  }
