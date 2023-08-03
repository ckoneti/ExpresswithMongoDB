import mongoose from 'mongoose';

 const connectDB =async () => {
    try{
        const connectToDb = await mongoose.connect(process.env.CONNECTION_STRING as string);
        console.log('Database connected:', connectToDb.connection.host, connectToDb.connection.name);
        
    }
    catch(error:any){
    console.log(error.message, 'Error in Connecting to DB')
    process.exit(1)
    }
}

export default connectDB;