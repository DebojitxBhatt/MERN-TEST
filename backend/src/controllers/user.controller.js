import { asyncHandler } from "../utils/asyncHandler.js";

//this method sends json response
const registerUser = asyncHandler( async (req, res) => {
        res.status(200).json({
            message: "ok"
        })
} )


export {registerUser,}