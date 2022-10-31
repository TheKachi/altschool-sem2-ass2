// import { Link } from "react-router-dom";

const Users = ({ users, loading, error }) => {
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto ">
			{users.map((user, i) => (
				<a
					href="/"
					className="p-[32px] my-[24px] shadow-md rounded bg-white text-black  w-full h-full"
					key={i}
				>
					<img
						src={user.picture.large}
						alt="`${user.name.title}'s headshot`"
						className="rounded-t w-full"
					/>

					<div className="">
						<h1 className="mb-[16px] font-extrabold text-xl lg:text-base">
							{user.name.first} {user.name.last}
						</h1>
					</div>
				</a>
			))}
		</div>
	);
};

export default Users;
