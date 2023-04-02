const formatFileData = (data) => {
  if (data.code) {
    return;
  }
  const props = ["hex", "number", "text"];
  validatedFiles = [];

  const fileHasAllProps = (file) => {
    return file[props[0]] && file[props[1]] && file[props[2]];
  };

  const hexValidation = (file) => {
    return file[props[0]].length == 32;
  };

  const numberValidation = (file) => {
    let isnum = /^\d+$/.test(file[props[1]]);
    return isnum;
  };

  const textValidation = (file) => {
    return typeof file[props[2]] === "string";
  };

  data.forEach((file) => {
    //Delete file prop. It is not necessary.
    if (file.file) {
      delete file.file;
    }
    //Check if validations are ok
    if (
      fileHasAllProps(file) &&
      hexValidation(file) &&
      numberValidation(file) &&
      textValidation(file)
    ) {
      validatedFiles.push(file);
    }
  });
  return validatedFiles;
};

module.exports = formatFileData;
