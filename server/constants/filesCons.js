const filesCons = {
  getAllFilesUrl: "https://echo-serv.tbxnet.com/v1/secret/files",
  filesReqOptions: {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: "Bearer aSuperSecretKey",
    },
  },
  getFileUrl: "https://echo-serv.tbxnet.com/v1/secret/file/",
};

module.exports = filesCons;
