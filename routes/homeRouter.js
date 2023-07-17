import express from 'express';


const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send({ message: "App running in root directory  ", success: true })
})


export default router



