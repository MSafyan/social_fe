import classNames from 'classnames';
import { Button as MuiButton } from '@mui/material';

// interface ButtonProps {
//     onClick?: () => void;
//     className: string;
//     testId?: string;
//     type?: "submit" | "button" | "reset";
// }
export const Button = ({
	children,
	onClick,
	testId,
	className,
	type = 'submit',
}) => {
	return (
		<MuiButton
			type={type}
			data-testid={testId}
			sx={{ backgroundColor: '#999', borderRadius: 1 }}
			onClick={onClick}
			className={classNames(
				'bg-rose-400 p-2 rounded-lg hover:bg-rose-600 text-white',
				className
			)}
		>
			{children}
		</MuiButton>
	);
};
