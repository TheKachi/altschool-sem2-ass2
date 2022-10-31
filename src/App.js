import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Users from "./components/Users";
import Pagination from "./components/Pagination";

const App = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage] = useState(10);

	useEffect(() => {
		const fetchUsers = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`https://randomuser.me/api/?inc=name,picture,gender&results=50`
				);
				setUsers(response.data.results);
				console.log(response.data.results);
			} catch (e) {
				setError(e);
			}
			setLoading(false);
		};
		fetchUsers();
	}, []);

	const lastUserIndex = currentPage * usersPerPage;
	const firstUserIndex = lastUserIndex - usersPerPage;
	const currentUsers = users.slice(firstUserIndex, lastUserIndex);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="App">
			<h1 className="text-[#000]">Users</h1>
			<Users users={currentUsers} loading={loading} error={error} />
			<Pagination
				usersPerPage={usersPerPage}
				totalNoOfUsers={users.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default App;
