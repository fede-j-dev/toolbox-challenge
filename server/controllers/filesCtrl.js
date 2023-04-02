const filesCons = require("../constants/filesCons");
const filesService = require("../services/filesService");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const filesCtrl = {
  getFilesList: async function (req, res) {
    fetch(filesCons.getAllFilesUrl, filesCons.filesReqOptions)
      .then((res) => res.json())
      .then((json) => res.send(json))
      .catch((err) => console.error("error:", err));
  },
  getFiles: async function (req, res) {
    fetch(filesCons.getAllFilesUrl, filesCons.filesReqOptions)
      .then((res) => res.json())
      .then((json) =>
        req.query.fileName
          ? filesService.getSingleFile(req, json)
          : filesService.getAllFiles(json)
      )
      .then((formattedData) => res.send(formattedData))
      .catch((err) => console.error("error:", err));
  },
};

module.exports = filesCtrl;
