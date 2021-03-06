import { createTheme } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		primary: {
			main: blue.A700
		},
		secondary: {
			main: grey.A700
		}
	}
});

export default theme;