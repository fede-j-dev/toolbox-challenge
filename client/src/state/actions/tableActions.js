import {
  CHANGE_PAGE,
  UPDATE_CURRENT_LINES,
  CHANGE_SELECTED_FILE,
  IS_LOADING,
} from "../types/tableTypes";

export const changePage = (pageNumber) => {
  return {
    type: CHANGE_PAGE,
    payload: pageNumber,
  };
};

export const updateCurrentLines = (currentLines) => {
  return {
    type: UPDATE_CURRENT_LINES,
    payload: currentLines,
  };
};

export const changeSelectedFile = (selectedFile) => {
  return {
    type: CHANGE_SELECTED_FILE,
    payload: selectedFile,
  };
};

export const isLoading = (boolean) => {
  return {
    type: IS_LOADING,
    payload: boolean,
  };
};
