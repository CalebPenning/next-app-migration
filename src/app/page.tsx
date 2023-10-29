import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
	title: "Next App Migration"
}

export default function Home() {
	return (
		<>
			<main>
				I am homepage
				<Link href="data">Click me</Link>
			</main>
		</>
	)
}
