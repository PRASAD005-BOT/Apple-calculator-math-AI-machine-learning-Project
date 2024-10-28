

```markdown
 Math Question Solver with Image Upload

This project is a web-based application that allows users to upload images containing mathematical questions (such as matrices or equations). Using Google's Gemini generative model, the application processes the image, solves the mathematical problem, and provides a detailed explanation.

Developed by **Prasad Engineer**.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Demo](#demo)
4. [Getting Started](#getting-started)
5. [Usage](#usage)
6. [Technologies Used](#technologies-used)
7. [Acknowledgements](#acknowledgements)
8. [Contact](#contact)

---

## Project Overview

This project leverages Flask and Google's Gemini API to extract text from an uploaded image and then solves the mathematical content within it. It is ideal for students and educators who need quick solutions and explanations for matrix or equation-based problems.

## Features

- **Image Upload**: Upload images containing math questions or equations.
- **AI-Powered Analysis**: Uses Google Gemini model to interpret and solve math problems.
- **Detailed Solutions**: Provides both the solution and an explanation for the answer.
- **User-Friendly Interface**: Simple design for easy interaction.

---

## Demo

Visit the live project here: [Math Question Solver Web App](https://your-live-project-link.com)

Watch the walkthrough video on YouTube: [YouTube Demo](https://www.youtube.com/your-youtube-link)

---

## Getting Started

### Prerequisites

- Python 3.x
- [Google API Key](https://console.cloud.google.com/) with access to the Gemini generative model
- Flask
- `dotenv` for environment variable management
- `google-generativeai` package

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/math-question-solver.git
   cd math-question-solver
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add your Google API Key:
     ```plaintext
     GOOGLE_API_KEY=your_google_api_key_here
     ```

4. **Run the application**:
   ```bash
   flask run
   ```

   The app should now be running locally at `http://127.0.0.1:5000/`.

---

## Usage

1. **Navigate to the `/gemini` endpoint**:
   - You can access the form to upload images containing math questions.

2. **Upload an Image**:
   - Select an image file from your device and submit.

3. **View the Solution**:
   - The app processes the image, solves the math question, and returns the solution along with a detailed explanation.

---

## Technologies Used

- **Flask**: Python-based web framework for building the web server.
- **Google Gemini Model**: AI model used for analyzing and generating answers from text in images.
- **JavaScript and HTML**: Front-end interaction and form handling.
- **dotenv**: For managing environment variables.

---

## Acknowledgements

- Special thanks to [Google Generative AI](https://developers.google.com/) for providing the Gemini API for AI-powered content generation.

---

## Contact

For any questions, feedback, or collaboration requests, please reach out to:

- **Prasad Engineer**  
- **Email**: your-email@example.com  
- **LinkedIn**: [Prasad's LinkedIn Profile](https://www.linkedin.com/in/yourprofile)  

Check out my other projects on [YouTube](https://www.youtube.com/your-channel-link) for tutorials and demos
