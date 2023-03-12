/**
 * 
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

import CMSBank from "@/lib/models/CMSBanks"
import Connect from "@/lib/utils/mongoose"

const AllCmsBanks = async (req, res) => {
    const { method } = req
    const { id, personal_identifier, bank_name, account, ifsc, intent } = req.body
    if (method == "POST") {
        await Connect()
        if (intent == "save") {
            let result = await CMSBank.create({
                "organisation_code": `${process.env.NEXT_PUBLIC_ORGANISATION}`,
                "personal_identifier": personal_identifier,
                "bank_name": bank_name,
                "account": account,
                "ifsc": ifsc
            })
            if (!result) res.status(500).send("Couldn't add record")
            if (result) res.status(200).send("Banks added succesfully!")
        }
        if (intent == "update") {
            let filter = {
                "organisation_code": `${process.env.NEXT_PUBLIC_ORGANISATION}`,
                "_id": id
            }
            let update = {
                "personal_identifier": personal_identifier,
                "bank_name": bank_name,
                "account": account,
                "ifsc": ifsc
            }
            let result = await CMSBank.findOneAndUpdate(filter, update)
            if (!result) res.status(500).send("Couldn't add record")
            if (result) res.status(200).send("Banks updated succesfully!")
        }
        if (intent == "delete") {
            let result = await CMSBank.findByIdAndDelete(id)
            if (!result) res.status(500).send("Couldn't delete record")
            if (result) res.status(200).send("Bank Deleted succesfully!")
        }
        if (!intent) {
            res.status(422).send("Intent Not Fount")
        }

    }
    else {
        res.status(401).send(`${method} method not allowed!`)
    }
}

export default AllCmsBanks