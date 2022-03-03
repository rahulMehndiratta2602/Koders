const errorHandlingMiddleware = (err, req, res, next) => {
    console.log(":boom::boom::boom::boom::boom::boom::boom::boom::boom::boom::boom::boom::boom::boom:", err)
    res.status(500).json({ msg: "Internal Server Error" })

}


export default errorHandlingMiddleware