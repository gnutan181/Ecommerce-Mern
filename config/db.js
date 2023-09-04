import mongoose from "mongoose";
import colors from "colors";
mongoose.set('strictQuery', false)
const connectDB = async () => {  
      try {
          const connect =  await mongoose.connect(process.env.MONGO_URL, {
              useUnifiedTopology: true,
              useNewUrlParser : true
            }) ;
            
            // console.log(`Mongodb Connected`)
            console.log(`Mongodb Connected : ${connect.connection.host}`)
            
          } catch (error) {
            console.log(error);
            process.exit(1); // if there is no connection between database then we dont want to further processs
          }
        }
 export default connectDB;

