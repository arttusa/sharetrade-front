import axios from 'axios';
import React, { useState } from 'react';

function Fileupload() {
  const [selectedFile, setSelectedFile] = useState(null)

  // Updating the state
  const onFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };
  

  const onFileUpload = () => {
    if (selectedFile === null) return
    const form = new FormData();
    form.append(
      "Chart",
      selectedFile,
      selectedFile.name
    );

    console.log(selectedFile);

    //axios.post("api/uploadfile", formData);
  };

  
  // File content to be displayed after choosing the file
  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
        </div>
      );
    } 
  };

  return (
    <div>
      <h1>
        File Upload
      </h1>
      <div>
        <input type="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>
          Upload!
        </button>
      </div>
    {fileData()}
    </div>
  );
}

export default Fileupload;