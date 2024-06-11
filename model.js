import mongoose from "mongoose";


const userSchema = mongoose.Schema(         //defining the schema for the database model
    {
        name : {
            type:String,
            required : true
        },
        age : {
            type : Number,
            required : true
        
        },
        email : {
            type: String,
            required : true
        }
    },
    {
        timestamps : true
    }
)


export const data = mongoose.model("Datas", userSchema)   //Exporting the database model