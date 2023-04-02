//React
import React, { useState, useEffect } from "react";

//Bootstrap
import Pagination from "react-bootstrap/Pagination";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { changePage, updateCurrentLines } from "../state/actions/tableActions";

function FilesPagination({ filesLines }) {
  const currentPage = useSelector((state) => state.currentPage);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(1);

  const maxLinesPerPage = 10;
  let items = [];

  //Update total pagination pages
  useEffect(() => {
    setTotalPages(Math.ceil(filesLines.length / maxLinesPerPage));
  }, [filesLines, maxLinesPerPage]);

  //Update currentLines(Files Lines that should be displayed on the table, depending on pagination page)
  useEffect(() => {
    const indexOfLastLine = currentPage * maxLinesPerPage;
    const indexOfFirstLine = indexOfLastLine - maxLinesPerPage;
    const currentLines = filesLines.slice(indexOfFirstLine, indexOfLastLine);

    dispatch(updateCurrentLines(currentLines));
  }, [filesLines, currentPage]);

  //Build pagination items
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        onClick={() => dispatch(changePage(number))}
        key={number}
        active={number === currentPage}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    filesLines.length > maxLinesPerPage &&
    !isLoading && (
      <div>
        <Pagination>{items}</Pagination>
        <br />
      </div>
    )
  );
}

export default FilesPagination;
