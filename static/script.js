const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth / 2; // Set width to half of the window
canvas.height = window.innerHeight - 100; // Set height to full window height minus some padding

let drawing = false;
let currentColor = "#000";
let brushThickness = 5;

// Function to get mouse or touch position
const getMouseOrTouchPos = (event) => {
    let posX, posY;
    if (event.touches && event.touches.length > 0) {
        posX = event.touches[0].clientX - canvas.offsetLeft;
        posY = event.touches[0].clientY - canvas.offsetTop;
    } else {
        posX = event.clientX - canvas.offsetLeft;
        posY = event.clientY - canvas.offsetTop;
    }
    return { clientX: posX, clientY: posY };
};

// Function to start drawing
const startDrawing = (event) => {
    drawing = true;
    ctx.beginPath();
    const { clientX, clientY } = getMouseOrTouchPos(event);
    ctx.moveTo(clientX, clientY);
};

// Function to draw on the canvas
const draw = (event) => {
    if (!drawing) return;
    const { clientX, clientY } = getMouseOrTouchPos(event);
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = brushThickness;
    ctx.lineTo(clientX, clientY);
    ctx.stroke();
    ctx.moveTo(clientX, clientY);
};

// Function to stop drawing
const stopDrawing = (event) => {
    drawing = false;
    ctx.closePath();
};

// Add mouse event listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Add touch event listeners
canvas.addEventListener('touchstart', (event) => {
    event.preventDefault();
    startDrawing(event);
});
canvas.addEventListener('touchmove', (event) => {
    event.preventDefault();
    draw(event);
});
canvas.addEventListener('touchend', stopDrawing);

// Clear the canvas
document.querySelector('.clear').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Change color based on selected color
const colorDivs = document.querySelectorAll('.clr');
colorDivs.forEach(div => {
    div.addEventListener('click', () => {
        currentColor = div.getAttribute('data-clr');
    });
});

// Change brush thickness
document.getElementById('brushThickness').addEventListener('input', (event) => {
    brushThickness = event.target.value;
    document.querySelector('output').value = brushThickness;
});

// Save button functionality
document.querySelector('.save').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = canvas.toDataURL();
    link.click();
});

// Handle the search button click to convert drawn text to a query
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchButton').addEventListener('click', () => {
        const dataUrl = canvas.toDataURL("image/jpeg");

        // Convert the Data URL to a Blob
        fetch(dataUrl)
            .then(res => res.blob())
            .then(blob => {
                const formData = new FormData();
                formData.append('canvasImage', blob, 'saved_canvas.jpg');

                // Send the form data to the Flask server
                return fetch('/gemini', {
                    method: 'POST',
                    body: formData
                });
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('resultText').innerText = data;
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('resultText').innerText = "An error occurred while processing the image.";
            });
    });
});
