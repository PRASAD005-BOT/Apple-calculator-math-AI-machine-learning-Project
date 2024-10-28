Flask-based Math Question Solver using Google Gemini API
This project, developed by Prasad, is a Flask application that accepts an uploaded image of a math-related question (like a matrix or equation), sends it to Google's Gemini API for processing, and returns a detailed solution and explanation as a plain text response. Ideal for applications where users need AI assistance in understanding or solving mathematical queries.

Demo and Additional Links
Live Website: Visit the Deployed Project
YouTube Video: Watch the Demo
Project Setup
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/yourusername/your-repo-name.git
Navigate to the project folder:

bash
Copy code
cd your-repo-name
Install the required dependencies:

bash
Copy code
pip install -r requirements.txt
Set up environment variables:

Create a .env file in the project root directory.
Add your Google API Key in the .env file:
plaintext
Copy code
GOOGLE_API_KEY=your_google_api_key
Run the Flask application:

bash
Copy code
python app.py
Access the application by navigating to http://127.0.0.1:5000 in your browser.

File Structure
app.py: Main application file containing all Flask routes and functionality.
templates/index.html: Main HTML template for uploading images.
static/: Directory for storing uploaded files (e.g., images).
Usage
Upload Image: Use the index.html page to upload an image containing a math question.
Process Image: The image is processed by the Gemini API, which attempts to solve the math question.
Get Response: The app returns the solution and explanation in plain text.
Routes
/: Main page for uploading an image.
/gemini: Endpoint for processing the uploaded image using the Gemini API.
/templates/<path:filename>: Serves static files from the templates directory
