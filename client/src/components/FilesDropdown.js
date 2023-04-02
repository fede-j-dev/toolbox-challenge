//React
import React, { useState, useEffect } from "react";

//Bootstrap
import Dropdown from "react-bootstrap/Dropdown";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { changeSelectedFile } from "../state/actions/tableActions";

//Constants
import { filesApiCalls, filesConst } from "../constants/filesCons";

function FilesDropDown() {
  //Redux
  const selectedFile = useSelector((state) => state.selectedFile);
  const dispatch = useDispatch();

  //State hooks
  const [filesList, setFilesList] = useState([]);

  useEffect(() => {
    fetch(filesApiCalls.filesListUrl)
      .then((response) => response.json())
      .then((data) => {
        setFilesList(data);
      });
  }, []);

  return (
    <Dropdown style={{ margin: "20px 0" }}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {selectedFile}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {selectedFile !== filesConst.allFiles && (
          <Dropdown.Item
            onClick={() => {
              dispatch(changeSelectedFile(filesConst.allFiles));
            }}
          >
            {filesConst.allFiles}
          </Dropdown.Item>
        )}
        {filesList.files?.map((file, index) => {
          return (
            <Dropdown.Item
              key={index}
              onClick={() => dispatch(changeSelectedFile(file))}
            >
              {file}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilesDropDown;
