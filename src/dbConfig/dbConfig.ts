import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connection', () => {
            console.log('Mongo DB connected succesfully')
        })
        connection.on('error', (err) => {
            console.log('Mongo DB connection error: ' + err);
            process.exit();
        })
    } catch (error) {
        console.log("Something goes wrong!");
        console.log(error);
    }
}