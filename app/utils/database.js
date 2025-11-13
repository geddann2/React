import mongoose from "mongoose"

const connectDB = async() => {

    try{
         await mongoose.connect("mongodb+srv://geddann2_db_user:Ueno0825@cluster0.pq6j5qs.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    }catch{
        console.log("Failed: Unconnected to MongoDB")
        throw new Error()
        
    }
}

export default connectDB