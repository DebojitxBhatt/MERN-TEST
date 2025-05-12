import mongoose, {Schema} from "mongoose";
const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowecase:true,
            trim: true,
          
            index:true
        },

        email:{
            type: String,
            required: true,
            unique: true,
            lowecase:true,
            trim: true,
            index: true,
            
        },

        fullname:{
            type: String,
            required: true,
            unique: true,
            lowecase:true,
            trim: true,
           
            index:true
        },
        avatar:{
            type:String,//cloudinary url
            required: true,
        },
        converImage:{
            type: String,//cloudinary url
        },
        watchHistory:[
           {type: Schema.Type.ObjectId, 
            ref:"Video"}
        ],
        password:{
            type: String,
            required:[true, 'Password is required']
        } ,
        refreshToken:{
            type:String
        },
        timeStamp:true
        
        
}
)

export const user = mongoose.model("User", userSchema)