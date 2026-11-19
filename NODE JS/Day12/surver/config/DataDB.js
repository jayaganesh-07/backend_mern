import mongoose from 'mongoose'

const DataDB=async () => {
    try {
        const connects= await mongoose.connect(process.env.MONGO_URL)
        console.log("server connect successfully");
        
    } catch (error) {
        console.log(error);
        console.log("error...");
        
    }
    
}
export default DataDB