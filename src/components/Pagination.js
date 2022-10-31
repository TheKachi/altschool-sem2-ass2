const Pagination = ({ usersPerPage, totalNoOfUsers, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalNoOfUsers / usersPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav className="border border-red-700 p-[32px_16px]">
			<ul className="pagination flex ">
				{pageNumbers.map((number) => (
					<li key={number} className="page-item px-[10px] py-[4px]">
						<a
							onClick={() => paginate(number)}
							href="!#"
							className="page-link text-black text-[18px]"
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
