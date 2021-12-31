import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../Components/Header";
import "./HowMuchSpace.scss";

function createData(energysource, wattps) {
  return { energysource, wattps };
}

const rows = [
  createData("Fossil fuels", "500 - 10,000"),
  createData("Nuclear", "500 - 1,000"),
  createData("Solar", "5 - 20"),
  createData("Hydropower", "5 - 20"),
  createData("Wind", "1 - 2"),
  createData("Wood and other biomass", "Less than 1"),
];

function HowMuchSpaceTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "#161617",
        boxShadow: 'none',
        // minWidth: 680,
      }}
    >
      <Table
        sx={{
          backgroundColor: "#161617",
          boxShadow: 'none',
          // minWidth: 680,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                borderColor: "#393a3c",
                color: "#13AAB3",
                fontSize: 16,
                fontWeight: 900
              }}
            >
              Energy source
            </TableCell>
            <TableCell
              sx={{
                borderColor: "#393a3c",
                color: "#13AAB3",
                fontSize: 16,
                fontWeight: 900
              }}
            >
              Watts / m2
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.energysource}
              sx={{
                "&:last-child, &:last-child td, &:last-child th": { border: 0 },
                "&:hover": { backgroundColor: "#1d1d1e", },
                borderColor: "#393a3c",
                color: "#dadee6",
                fontSize: 16,
                transition: "0.2s ease"
              }}
            >
              <TableCell
                sx={{
                  borderColor: "#393a3c",
                  color: "#dadee6",
                  fontSize: 16,
                }}
              >
                {row.energysource}
              </TableCell>
              <TableCell
                sx={{
                  borderColor: "#393a3c",
                  color: "#dadee6",
                  fontSize: 16,
                  fontWeight: 900
                }}
              >
                {row.wattps}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function HowMuchSpace(props) {
  return (
    <section id={props.id}>
      <Header
        HeaderTitle="How much power can we generate per square meter?"
        PageDescription="The power density of solar could theoretically reach 100 watts per square meter, though no one has accomplished this yet."
      />
      <div className="tableContainer">
        <HowMuchSpaceTable />
      </div>
    </section>
  );
}

export default HowMuchSpace;
