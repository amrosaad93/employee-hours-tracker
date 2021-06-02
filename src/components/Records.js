import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Records = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/records")
      .then((res) => res.json())
      .then((data) => setRecords(data));

    return () => {};
  }, []);
  console.log(records);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="Records">
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell align="center">Expected Working Hours</TableCell>
              <TableCell align="center">Arrival Time</TableCell>
              <TableCell align="center">Departure Time</TableCell>
              <TableCell align="center">Worked Hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id}>
                <TableCell component="th" scope="row">
                  {record.day}
                </TableCell>
                <TableCell align="center">{record.expHours}</TableCell>
                <TableCell align="center">{record.arrivalTime}</TableCell>
                <TableCell align="center">{record.departureTime}</TableCell>
                <TableCell align="center">{record.workHours}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Records;
