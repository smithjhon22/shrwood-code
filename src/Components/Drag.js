import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "webp", "GIF", "PDF"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="drag-drop">
      
        
          
            <label
              className="drag-drop-label"
              for="exampleFormControlTextarea1"
            >
              Attach Cv
            </label>
            <FileUploader
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          
       
    </div>
  );
}

export default DragDrop;
