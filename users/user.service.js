const pool = require("../config/database");


module.exports = {
    create: (data, callback) =>{
        pool.query(
            `insert into test(email, password)
            values(?,?)`,
            [
                data.email,
                data.password
            ],
            (error , results, fields) => {
                if (error){
                    return callback(error);
                }
                return callback(null, results)
            }
        );
    },
    getUsers: callBack=>{
        pool.query(
            "SELECT  user_id, user_code, first_name,middle_name, last_name, mobile, role, address_1,address_2,taluka_district,city,pincode,state,fe_associate_id,language_code,app_user_code  FROM  users where role = 'Farmer'",
        [],
        (error,results,fields) =>{
            if(error){
              return  callBack(error);
            }
            return callBack(null, results);
        }
        );
    },
    getdealers: callBack =>{
               pool.query(
                  "SELECT  user_id, user_code, first_name,middle_name, last_name, mobile, role, address_1,address_2,taluka_district,city,pincode,state,fe_associate_id,language_code,app_user_code  FROM  users where role = 'DEALER'",
               [],
             (error,results,fields) =>{
                  if(error){
                     return  callBack(error);
                   }
        return callBack(null, results);
                }
               );
          },
           getUserByUserEmail: (email, callBack) =>{
            pool.query(
                `select * from test where email = ?`,
                [email],
                (error, results, fields)=> {
                    if(error) {
                        callBack(error);
                    }
                    return callBack(null, results[0]);
                }
            );
        }
};