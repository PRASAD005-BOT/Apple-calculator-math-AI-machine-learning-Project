from flask import Flask, render_template, request, redirect, url_for, send_from_directory
import os
import google.generativeai as genai
from dotenv import load_dotenv
from werkzeug.utils import secure_filename

# Load environment variables
load_dotenv()
app = Flask(__name__)

# Configure Google API Key
api_key = os.getenv("GOOGLE_API_KEY").strip()
genai.configure(api_key=api_key)

# Configure upload folder
UPLOAD_FOLDER = 'static'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload directory exists
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route("/gemini", methods=["POST"])
def gemini():
    # Check if a file is part of the request
    if 'canvasImage' in request.files:
        canvas_image = request.files['canvasImage']
        
        # Check if the file has a valid filename
        if canvas_image.filename == '':
            return "No selected file", 400
        
        # Save the uploaded canvas image
        filename = secure_filename("saved_canvas.jpg")  # You can change the filename if needed
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        
        try:
            canvas_image.save(file_path)
        except Exception as e:
            return f"An error occurred while saving the image: {str(e)}", 500
        
        # Upload the saved canvas image for processing
        try:
            sample_file = genai.upload_file(
                path=file_path,
                display_name="Maths Question or Coding Question, give information for text given"
            )
            
            # Get the uploaded file
            file = genai.get_file(name=sample_file.name)

            # Set up the generative model
            model = genai.GenerativeModel(model_name="gemini-1.5-flash")

            # Generate content based on the image
            response = model.generate_content(
                [
                    sample_file,
                    "In the picture, you have been provided with a question. If it is a coding question, please solve it and provide the code solution along with an explanation. If it is a matrix question/equation, solve it and give a numerical answer. First, write the final solution, then write the explanation. Provide a plain text response only. If drawn any query, give information up to 100 lines. Generate detailed information for text content."
                ]
            )
            
            return response.text
        
        except Exception as e:
            return f"An error occurred while processing the image: {str(e)}", 500

    return "No canvas image provided", 400

@app.route("/")
def index():
    return render_template("index.html")  # Render the index template

@app.route('/templates/<path:filename>')
def send_template_file(filename):
    return send_from_directory('templates', filename)

if __name__ == "__main__":
    app.run(debug=True)
