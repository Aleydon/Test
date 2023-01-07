/* eslint-disable jsx-a11y/anchor-has-content */
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
export default function ButtonComponent({ link, text }) {
	return (
			<Button href="#contained-buttons" variant="contained" size="small">
				<Link color="inherit" href={link} target="_blank">{text}</Link>
			</Button>
)}
