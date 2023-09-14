import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { getTeamsInfo } from '@/api';


export default function Home({ data }) {

// Table
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
// End Table

  return (
    <TableContainer component={Paper} sx={{mt: 3}}>
        <Table sx={{ minWidth: 700 }}>
            <TableHead>
            <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell>Member Name</StyledTableCell>
                <StyledTableCell>Score</StyledTableCell>
                <StyledTableCell>Submitted</StyledTableCell>
                <StyledTableCell>Grade</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row, index) => (
                <StyledTableRow key={row.id}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <Image 
                    src={row.img} 
                    width={40} 
                    height={40} 
                    alt={row.name}
                    style={{borderRadius: '50%'}} /> {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.score}</StyledTableCell>
                <StyledTableCell align="left">{row.submitted}</StyledTableCell>
                <StyledTableCell align="left">{row.grade}</StyledTableCell>
                <StyledTableCell align="left">{row.isPass ? <Typography fontWeight={'bold'} color={'green'}>Passed</Typography>
                    : <Typography fontWeight={'bold'}  color={'red'}>Failed</Typography>}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}


export async function getStaticProps(context) {

  const res = await getTeamsInfo();

  return { 
    props: { data: res } 
  }
}