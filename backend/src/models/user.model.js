import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
            index: true //makes easier in search
        },
         email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true         
        },
          fullName: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
            index: true
        },
          avatar: {
            type: String, // cloudinary url
            required: true,
           
        },
        coverImage: {
            type: String, // cloudinary url
          
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
    timestamps: true,
    }
)

   // this is middleware prehook that runs before saving password to brcypt it 
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password = brcypt.hash(this.password, 10)
    next()
})
// jwt token methods
userSchema.methods.isPasswordCorrect = async function
(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    jwt.sign(
        {
            _id: this._id,
            email:this.email,
            username: this.username,
            fullName: this.fullName

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expireIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    jwt.sign(
        {
            _id: this._id,
            email:this.email,
            username: this.username,
            fullName: this.fullName

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expireIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )

}



export const User = mongoose.model("User", userSchema)