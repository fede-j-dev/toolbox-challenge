const routes = require("express").Router();
const filesCtrl = require("../controllers/filesCtrl");

routes.get("/files/data", filesCtrl.getFiles);
routes.get("/files/list", filesCtrl.getFilesList);

module.exports = routes;
