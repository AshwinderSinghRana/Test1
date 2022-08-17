const mongoose=require("mongoose")

async function dbconn(){
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports=dbconn