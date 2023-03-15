import User from "@/lib/models/UserModel"
import Connect from "@/lib/utils/mongoose"

export default async function updateUser(req, res) {
    const { method } = req
    const { allowed_pages, user_id } = req.body
    if (method == "POST") {
        await Connect()
        const filter = {
            "organisation_code": `${process.env.NEXT_PUBLIC_ORGANISATION}`,
            "user_id": user_id
        }
        const result = await User.findOneAndUpdate(filter, {
            "allowed_pages": allowed_pages,
        })

        if(result) return res.status(200).json(result)
        if(!result) return res.status(419).json({message: "Couldn't Update Permissions"})
    }
    else {
        res.status(403).json({message: `${method} METHOD NOT ALLOWED`})
    }
}