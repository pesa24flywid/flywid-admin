import Global from "@/lib/models/Global";
import Connect from "@/lib/utils/mongoose";

export default async function GlobalDetails(req, res) {
    await Connect()
    if (req.method == "GET") {
        const result = await Global.findOne({ organisation_code: "FLYWID" })
        if (!result) return res.status(404).json({ message: "Global Info not found!" })
        return res.status(200).json(result)
    }

    if (req.method == "POST") {
        const result = await Global.findOneAndUpdate({organisation_code: "FLYWID"}, req.body).exec()
        if (!result) return res.status(500).json({ message: "Error while updating" })
        return res.status(200).json(result)
    }
}