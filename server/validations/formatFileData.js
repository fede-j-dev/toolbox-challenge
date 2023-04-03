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

  // Iterate over each file object in the data array
  for (const file of data) {
    // Delete the file prop if it exists
    if (file.file) {
      delete file.file;
    }

    // If all validations pass, add the file object to the validatedFiles array
    if (
      fileHasAllProps(file) &&
      hexValidation(file) &&
      numberValidation(file) &&
      textValidation(file)
    ) {
      validatedFiles.push(file);
    }
  }

  return validatedFiles;
};

module.exports = formatFileData;
