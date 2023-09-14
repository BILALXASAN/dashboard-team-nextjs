import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const items = [
  {
    id: 1,
    titleh: 'Top 10',
    titlem: 'Position in dribbble',
    titlef: '20% Increase from Last Week',
    backgroundColor: '#FFF0E6'
  },
  {
    id: 2,
    titleh: '26',
    titlem: 'New employees onboarded',
    titlef: '15% Increase from Last Month',
    backgroundColor: '#ECEAFE'
  },
  {
    id: 3,
    titleh: '500',
    titlem: 'New Clients Approached',
    titlef: '5% Increase from Last Week',
    backgroundColor: '#E5F7FF'
  }
]

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center" 
        spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 20 }} style={{width: '450px', height: '500px', gap: '0px'}}>
        {items.map((item, index) => (
          <Grid item xs={1} sm={2} md={4} key={index}>
            <Item style={{backgroundColor: item.backgroundColor, padding: '0px', fontWeight:'bold', width:'400px', height:'115px'}}>
              <h1>{item.titleh}</h1>
              <p>{item.titlem}</p>
              <p>{item.titlef}</p>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}