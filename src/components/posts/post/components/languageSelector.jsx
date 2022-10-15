import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Api from '../../../../api/api';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function SelectSmall({ q, options }) {
	const [loading, setLoading] = React.useState(false);

	const [translated, setTranslated] = React.useState('');
	const [option, setOption] = React.useState('');

	const handleChange = async (event) => {
		debugger;
		setLoading(true);
		if (event.target.value.length > 0) {
			const res = await Api.translateLanguages({
				q,
				source: 'en',
				target: event.target.value,
			});
			setTranslated(res.data.translatedText);
			setLoading(false);
		}
		setOption(event.target.value);
	};

	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<Typography variant='body1'>Translate to:</Typography>
				<FormControl
					sx={{
						m: 1,
						minWidth: 120,
						'& .MuiPaper-root': {
							background: 'red',
							maxHeight: 400,
						},
					}}
					size='small'
				>
					<InputLabel id='demo-select-small'>english</InputLabel>
					<Select
						labelId='demo-select-small'
						id='demo-select-small'
						value={option}
						label='Age'
						onChange={handleChange}
						sx={{
							'& .MuiList-root': {
								maxHeight: 400,
							},
						}}
					>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
						{options.map((_, i) => {
							return (
								<MenuItem key={i} value={_.code}>
									{_.name}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</Box>
			{loading && <CircularProgress />}
			{option.length > 0 && (
				<Typography variant='body2'>{translated}</Typography>
			)}
		</>
	);
}
