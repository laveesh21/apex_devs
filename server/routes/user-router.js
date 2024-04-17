import {Router} from "express"
import User from "../models/user.model.js"

const router = Router()

router.get('/:id', async (req, res)=>{
    const userId = req.params.id
    try{
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user)
    }catch(error){
        res.status(505).json({message: "Internal Server Error"})
    }
})

export default router