import * as mysql from "mysql";
import config from "../config";
import Chirpr from "./queries/chirpr";

export const Connection = mysql.createConnection(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
  return new Promise<T>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(results);
      }
    })
  });
};

export default {
  Chirpr,
};
