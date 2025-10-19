import mongoose from 'mongoose'
export const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Mongodb connected succesfully')
    } catch(error){
        console.error('Error connecting to mongodb',error)
        process.exit(1) // exit with failure
    }
}