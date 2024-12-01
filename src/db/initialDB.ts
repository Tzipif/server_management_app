import runQuery from "./dal"

const createDB = async () => {
    let q = "CREATE DATABASE IF NOT EXISTS `server_management_app`"

    await runQuery(q)
}

const createTables = async () => {

    let q = `CREATE TABLE IF NOT EXISTS hostingCompanie (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name ENUM('Microsoft', 'IBM', 'GoDaddy', 'DigitalO') NOT NULL
        );`;

    await runQuery(q)

    q = `CREATE TABLE IF NOT EXISTS server (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        ip VARCHAR(45) NOT NULL,
        hostingCompany_id INT,
        status BOOLEAN NOT NULL DEFAULT FALSE,
        createdTime DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (hostingCompany_id) REFERENCES hostingCompanie(id)
    )`;

    await runQuery(q)
}

const createSampleData = async () => {
    let q = `INSERT INTO hostingCompanie (name)
    VALUES ('Microsoft'),
    ('GoDaddy'),
    ('IBM'),
    ('DigitalO');`;

    await runQuery(q);

    q = `INSERT INTO server (name, ip, hostingCompany_id, status, createdTime)
    VALUES ('Server 1', '192.168.1.1', 1, TRUE, NOW()),
    ('Server 2', '192.168.1.2', 2, FALSE, NOW()),
    ('Server 3', '192.168.1.3', 3, TRUE, NOW()),
    ('Server 4', '192.168.1.4', 4, TRUE, NOW());`;

    await runQuery(q);

}

// createDB().then(() => {
//     console.log('Database created');
// });

// createTables().then(() => {
//     console.log('Tables created');
// });

// createSampleData().then(() => {
//     console.log('Sample Data created');
// });