import DataPage from "./DataPage"
import type { Metadata } from "next"

export default async function Page() {
	const { props } = await getCatFacts()
	return <DataPage {...props} />
}

export const metadata: Metadata = {
	title: "Cat Facts Page",
	description: "Now with meta data!!"
}

export const getCatFacts = async () => {
	const req = await fetch(`${process.env.API_BASE_URL}?count=10`, {
		// use cache to refresh data on each load, cached by default
		cache: "no-store"
	})
	const { data } = await req.json()
	return {
		props: { data }
	}
}
