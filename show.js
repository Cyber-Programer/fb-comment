function selectImage() {
    // Trigger click on the hidden file input
    document.getElementById('imageInput').click();
}

function setImage() {
    // Get the selected file
    var selectedFile = document.getElementById('imageInput').files[0];

    if (selectedFile) {
        // Display the selected image (you can customize this part)
        var imageUrl = URL.createObjectURL(selectedFile);
        document.getElementById('pp').src = imageUrl;
    }
}

function selectImage2(){
    document.getElementById('imageInput2').click();
}


function setImage2(){
    var selectedFile = document.getElementById('imageInput2').files[0];

    if (selectedFile) {
        // Display the selected image (you can customize this part)
        var imageUrl = URL.createObjectURL(selectedFile);
        document.getElementById('pp2').src = imageUrl;
    }
}


function saveAsImage() {
    // Use html2canvas to capture the content of the 'main-box' div
    html2canvas(document.querySelector('.main-box')).then(function(canvas) {
        // Convert the canvas to a data URL
        var imageDataUrl = canvas.toDataURL("image/png");

        // Create a link element and trigger a download
        var downloadLink = document.createElement('a');
        downloadLink.href = imageDataUrl;
        downloadLink.download = 'captured_image.png';
        downloadLink.click();
    });
}