import {
  CHANGE_PAGE,
  UPDATE_CURRENT_LINES,
  CHANGE_SELECTED_FILE,
  IS_LOADING,
} from "../types/tableTypes";

const initialState = {
  currentPage: 1,
  currentLines: [],
  selectedFile: "All Files",
  isLoading: false,
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case UPDATE_CURRENT_LINES:
      return {
        ...state,
        currentLines: action.payload,
      };
    case CHANGE_SELECTED_FILE:
      return {
        ...state,
        selectedFile: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default tableReducer;
