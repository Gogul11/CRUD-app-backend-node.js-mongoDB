import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import { port, mongourl } from "./value.js"
import { data } from "./model.js"

const app = express()

app.use(express.json())
app.use(cors())


app.get("/", async (req, res) => {              //Route for viewing the data stored in the database
    try{
        const currentdata = await data.find({},{name:true,
                                                age:true,
                                                email:true,
                                                _id:false
                                            })
                                            
        res.status(200).json(currentdata)
    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})

app.post("/add", async (req, res) => {         //Route for adding data to the database
    try{
        const currentdata = await data(req.body)
        currentdata.save()
        res.status(200).json({message : "successfully added.."})
    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})

app.put("/update", async (req, res) => {           //Route for updating the data stored in the database
    const reqdata = req.body
    try{
        const updateddata = await data.
                                findOneAndUpdate({ $or :[{name:reqdata.name},
                                                        {age : reqdata.age},
                                                        {email:reqdata.email}
                                                        ]}, {$set : req.body}, {new : true})

        res.status(200).json({message : "successfully updated.."})
    }
    catch(error){
        res.status(400).json({message : error.message})
    }
})


app.delete("/del", async (req, res) => {       //Route for deleting the data stored in the database
    const reqdata = req.body
    try{
        const deletedata = await data.
                                    findOneAndDelete({ $or :[{name:reqdata.name},
                                            {age : reqdata.age},
                                            {email:reqdata.email}
                                            ]})

        res.status(200).json({message : "successfully deleted.."})
                                            
    }
    catch(error){
        res.status(400).json({message : error.message})

    }
})

mongoose.connect(mongourl)          //Establishing connection to the database
.then(() =>
    {
        app.listen(port, () => {
            console.log(`The server is running on ${port}`)
        })
    }
)
.catch((error) => {
    console.log(error.message)
}
)