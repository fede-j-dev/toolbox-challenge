//React
import React from "react";

//Bootstrap
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";

//Redux
import { useSelector } from "react-redux";

//Constants
import { filesConst } from "../constants/filesCons";

function FilesTable() {
  const currentLines = useSelector((state) => state.currentLines);
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <>
      <Table striped bordered hover style={{ width: "1100px" }}>
        <thead>
          <tr>
            <th>{filesConst.fileName}</th>
            <th>{filesConst.text}</th>
            <th>{filesConst.number}</th>
            <th>{filesConst.hex}</th>
          </tr>
        </thead>
        <tbody>
          {currentLines.map((line, index) => {
            return (
              <tr key={index}>
                <td>{line.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden"></span>
          </Spinner>
        )}
        {currentLines.length == 0 && !isLoading && (
          <p>{filesConst.noRegistry}</p>
        )}
      </div>
    </>
  );
}

export default FilesTable;
