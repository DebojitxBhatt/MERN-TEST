import { asyncHandler } from "../utils/asyncHandler.js";

//this method sends json response
const registerUser = asyncHandler( async (req, res) => {
         // get user details from frontend
         //validation- not empty
         // checking user in db if already exists with the help of username, email

         //checking if the user provided files ( avatar // coverimage)
         //creater user object - create entry in db
         //remove password and refresher token fieild from response
         // check for user creation
         // return response

         const {fullName, email, username, password } = req.body
         console.log("email: ", email);
} )


export {registerUser,}