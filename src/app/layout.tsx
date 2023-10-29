import "@/styles/globals.css"
import ServerLayout from "./ServerLayout"

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<ServerLayout>{children}</ServerLayout>
			</body>
		</html>
	)
}
