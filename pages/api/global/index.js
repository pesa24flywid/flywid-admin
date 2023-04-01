import Global from "@/lib/models/Global";
import Connect from "@/lib/utils/mongoose";

export default async function GlobalDetails(req, res) {
    await Connect()
    const result = await Global.findOne({organisation_code: "PESA24"})
    if (!result) return res.status(404).json({ message: "Global Info not found!" })
    return res.status(200).json(result)
    
}