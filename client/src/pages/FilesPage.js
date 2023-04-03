//React
import React, { useState, useEffect, useCallback } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  changePage,
  updateCurrentLines,
  isLoading,
} from "../state/actions/tableActions";

//Components
import FilesDropdown from "../components/FilesDropdown";
import FilesTable from "../components/FilesTable";
import FilesPagination from "../components/FilesPagination";

//Constants
import { filesApiCalls, filesConst } from "../constants/filesCons";

function FilesPage() {
  //Redux
  const dispatch = useDispatch();
  const selectedFile = useSelector((state) => state.selectedFile);

  // State hooks
  const [filesLines, setFilesLines] = useState([]);

  useEffect(() => {
    //Api call to retrieve all files
    if (selectedFile === filesConst.allFiles) {
      dispatch(updateCurrentLines([]));
      dispatch(isLoading(true));
      fetch(filesApiCalls.getAllFilesUrl)
        .then((response) => response.json())
        .then((data) => {
          dispatch(changePage(1));
          dispatch(isLoading(false));
          formatData(data);
        });
    } else {
      //Api call to retrieve selected file
      dispatch(updateCurrentLines([]));
      dispatch(isLoading(true));
      fetch(`${filesApiCalls.getFileUrl}${selectedFile}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch(changePage(1));
          dispatch(isLoading(false));
          formatData(data);
        });
    }
  }, [selectedFile]);

  const formatData = useCallback((data) => {
    let filesLines = [];
    data.forEach((file) => {
      file.lines?.forEach((line) => {
        filesLines.push({ file: file.file, ...line });
      });
    });
    setFilesLines(filesLines);
  }, []);

  return (
    <div className="App">
      <FilesDropdown />
      <FilesTable />
      <FilesPagination filesLines={filesLines} />
    </div>
  );
}

export default FilesPage;
