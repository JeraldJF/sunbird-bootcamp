import { Alert, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AlertMessage = ({ messsage, icon, color = 'error' }) => {

    const IconPrimary = icon;
    const primaryIcon = icon ? <IconPrimary fontSize="large" /> : null;

    const theme = useTheme();
    return <>
        <Alert color={color} variant='standard' icon={primaryIcon} sx={{ border: "1px solid", borderColor: theme.palette.primary[200] + 25, }}>
            <Typography>{messsage || 'Something went wrong'}</Typography>
        </Alert>
    </>
}

export default AlertMessage;
