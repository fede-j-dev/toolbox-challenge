const filesCons = require("../constants/filesCons");
const convertCsvToObject = require("../utils/csvConverter");
const formatFileData = require("../validations/formatFileData");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

exports.getSingleFile = async (req, json) => {
  const file = req.query.fileName;
  let mappedData = [];
  if (json["files"].includes(file)) {
    mappedData = fetchFile(file);
  }
  return mappedData;
};

exports.getAllFiles = async (json) => {
  let mappedData = [];
  let promisesArray = json["files"].map(async (file) => {
    mappedData = await fetchFile(file);
  });
  await Promise.all(promisesArray);
  return mappedData;
};

async function fetchFile(file) {
  mappedData = [];
  await fetch(filesCons.getFileUrl + file, filesCons.filesReqOptions)
    .then((res) => res.text())
    .then((data) => convertCsvToObject(data))
    .then((objectData) => formatFileData(objectData))
    .then((formattedData) =>
      mappedData.push({ file: file, lines: formattedData })
    )
    .catch((err) => console.error("error:", err));
  return mappedData;
}
