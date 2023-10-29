import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
	name: string
}

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
	res.status(200).json({ name: "Caleb P" })
}
