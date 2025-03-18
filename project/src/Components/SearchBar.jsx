import React from 'react'

const SearchBar = ({ handleSearchBar }) => {

	return (
		<div className='search-box'>
			<div id="search">
				<input type="text" placeholder="Find your Product!.." onChange={handleSearchBar}></input>
				<button>
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>
		</div>
	);
};

export default SearchBar