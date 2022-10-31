import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Users from "./components/Users";

const App = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	// const [page, setPage] = useState(1);
	// const [usersPerPage, setUsersPerPage] = useState(10);

	useEffect(() => {
		const fetchUsers = async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					`https://randomuser.me/api/?inc=name,picture,gender=female&results=10`
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

	return (
		<div className="App">
			<h1 className="text-[#000]">Users</h1>
			<Users users={users} loading={loading} error={error} />
		</div>
	);
};

export default App;
