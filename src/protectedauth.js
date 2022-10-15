import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function ProtectedAuth({ component: Cmp, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) =>
				Cookies.get('auth') === undefined ? (
					<Cmp {...props} />
				) : (
					<Redirect to='/' />
				)
			}
		/>
	);
}
