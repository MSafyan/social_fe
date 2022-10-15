import { useState, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';

function Search({ allUsers }) {
	const [searchUsers, setSearchUsers] = useState([]);

	const searchHandle = (e) => {
		const name = e.target.value;
		let data = allUsers.filter((user) => {
			if (user.fullname.toLowerCase().includes(name.toLowerCase())) {
				return user;
			}
		});
		setSearchUsers(data);
	};

	useEffect(() => {
		setSearchUsers(allUsers);
	}, [allUsers]);

	return (
		<div className='search-box'>
			<FeatherIcon icon='search' size={16} className='icon icon-light' />
			<input
				type='text'
				onChange={searchHandle}
				className='form-control search-type'
				placeholder='find...'
			/>
			<div className='icon-close'>
				<FeatherIcon icon='x' size={16} className='icon-light' />
			</div>
			<div className='search-suggestion'>
				<ul className='friend-list'>
					{searchUsers &&
						searchUsers.map((item) => (
							<Suggestion
								id={item._id}
								fullname={item.fullname}
								avatar={item.avatar}
							/>
						))}
				</ul>
			</div>
		</div>
	);
}

const Suggestion = ({ id, fullname, avatar }) => {
	return (
		<li key={id} onClick={() => (window.location.href = `/profile/${id}`)}>
			<div className='media'>
				<img src={avatar} alt='user' />
				<div className='media-body'>
					<div>
						<h5 className='mt-0'>{fullname}</h5>
					</div>
				</div>
			</div>
		</li>
	);
};

export default Search;
