type DataPageProps = {
	data: Array<string>
}

const DataPage = ({ data }: DataPageProps) => {
	return (
		<div>
			<ul>
				{data.map((fact, idx) => (
					<li key={fact + "-" + idx}>{fact}</li>
				))}
			</ul>
		</div>
	)
}

export default DataPage
