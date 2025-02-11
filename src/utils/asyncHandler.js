const asyncHandler = (fn) => {
    async (req, res ,next) => {
        try {
            fn();
        } catch (error) {
            res.status(error.code || 500).json({
                success: false,
                message: error.message
            })
            console.log(`ERROR!!! ${error}`);
        }
    }
}

// const asyncHandler2 = (requestHandler) => {
//     Promise.resolve((req, res, next) => {
//         requestHandler(req, res, next);
//     }).catch(err => console.error(`Error ${err}`))
// }

export default asyncHandler;