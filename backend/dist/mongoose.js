"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startDB = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Mongodb is connected!!!');
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
// connecting to Mongodb and starting the server
startDB();
