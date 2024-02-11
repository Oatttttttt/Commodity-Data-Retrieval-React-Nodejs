import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CustomTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Rate</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.rates &&
            Object.entries(data.rates).map(([name, rate]) => (
              <StyledTableRow key={name}>
                <StyledTableCell component="th" scope="row">
                  {name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {rate.toFixed(4)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
CustomTable.propTypes = {
  data: PropTypes.shape({
    timestamp: PropTypes.number,
    date: PropTypes.string,
    rates: PropTypes.shape({
      BRENTOIL: PropTypes.number,
    }),
  }),
};
export default CustomTable;
