import { error } from "console";
import mongoose from "mongoose";

export async function name() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection= mongoose.connection;
        connection.on('connected', () => {
            console.log("MongoDB connected successfully!")

        })
        connection.on('error', (err) => {
            console.log('MongoDB connected error. Please make sure MongoDB is runnig.' + err);
            process.exit();
        })

    }catch {
        console.log("Someting goes wrrong!")
        console.log(error)
    }
}