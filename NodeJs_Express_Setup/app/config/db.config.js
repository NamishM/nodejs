const fs = require("fs");
const serverCa = [fs.readFileSync("C:/Project/test/sample2/app/config/mysql_cert/BaltimoreCyberTrustRoot.crt.pem", "utf8")];
module.exports = {
  HOST: "portfolio-db-test.mysql.database.azure.com",
  USER: "mysqltestdbadmin@portfolio-db-test",
  PASSWORD: "@gilE7879",
  DB: "nodejs-test",
  dialect: "mysql",
  port: 3306,
  ssl: {
    rejectUnauthorized: true,
    ca: serverCa
  },
  dialectOptions: {
    ssl: {
      require: true,
      ca: serverCa
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};