document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const fileNameDisplay = document.getElementById('fileNameDisplay');

  
    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name; 
        fileNameDisplay.textContent = `Uploaded File: ${fileName}`; 
    } else {
        fileNameDisplay.textContent = 'No file selected.'; 
    }
});