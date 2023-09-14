import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/system';

const MyListItem = styled(ListItem)(({ theme }) => ({
    '& span': {
        fonWeight: '400 !important',
    },
    '&:hover, &.active': {
        transition: '0.3s',
        color: 'white',
        background: `linear-gradient(to right top, ${theme.palette.primary.dark}, ${theme.palette.primary.light}) `,
        '& svg': {
            color: 'white'
        }
    }
}));

export default MyListItem;
