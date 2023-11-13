import { gerListUser } from "../services/UserServices"

function Home() {
	const handleGetUser = () => {
		gerListUser()
	}
	return (
		<div>
			<button
				type="button"
				onClick={handleGetUser}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				getList User
			</button>
		</div>
	)
}

export default Home
