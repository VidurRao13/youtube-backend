import { asyncHandler } from "../utils/asyncHandler.js"
import { apiResponse } from "../utils/apiResponse.js"


//TODO: build a healthcheck response that simply returns the OK status as json with a message
const healthcheck = asyncHandler(async(req, res) => {
    return res.status(200).json(new apiResponse(200, null, "OK!"))

})

export {
    healthcheck
}