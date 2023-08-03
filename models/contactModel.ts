import mongoose from "mongoose";
const accountSchema = new mongoose.Schema({
account_id:{
    type: Number,
    requir:[true, "Please add account_id"]

},
limit:{
    type:Number
},
products:{
    type:Array,
    require:[true, "Please add products for an account_id"]
}
})

export default  mongoose.model("accounts", accountSchema);