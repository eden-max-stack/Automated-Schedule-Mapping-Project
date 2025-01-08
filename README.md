# Automated Schedule-Mapping Project

## Overview
This project (one of my first ones, and something I was very proud of then) is a Flask-based web application that enables users to create templates and manage events. It uses MySQL for data storage and integrates with the Google Calendar API to facilitate event scheduling. This was created to sovle the problem of mapping elected subjects (by student) with a unified time table schedule across all departments in my university. It is an initial prototype.

### Features:
- **Dynamic Templates:** Create templates with customizable details (name, description, email ID).
- **Google Calendar Integration:** Schedule events directly through the application.
- **Responsive Webforms:** Built using Flask and Jinja templates for interactive user experiences.
- **MySQL Integration:** Store and manage template data securely.

---

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Setup Instructions](#setup-instructions)
3. [Project Structure](#project-structure)
4. [Usage](#usage)
5. [Future Improvements](#future-improvements)
6. [Contributing](#contributing)

---

## Technologies Used
- **Python:** Flask, MySQL Connector, Google API Client Library
- **Frontend:** HTML, Jinja Templates, CSS
- **Database:** MySQL

---

## Setup Instructions

### Prerequisites
- Python 3.8 or later
- MySQL Server
- Google Cloud Platform credentials with Calendar API enabled

### Steps
1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Set Up the Environment:**
   - Create a virtual environment:
     ```bash
     python -m venv env
     source env/bin/activate  # On Windows: env\Scripts\activate
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```

3. **Configure MySQL:**
   - Create a database named `gcapdb`.
   - Update the following variables in `app.py` with your MySQL credentials:
     ```python
     app.config['MYSQL_USER'] = 'your-username'
     app.config['MYSQL_PASSWORD'] = 'your-password'
     app.config['MYSQL_DB'] = 'gcapdb'
     ```

4. **Set Up Google Calendar API:**
   - Download `credentials.json` from the Google Cloud Console.
   - Place it in the root directory of the project.

5. **Run the Application:**
   ```bash
   python app.py
   ```
   Access the application at `http://localhost:5000`.

---

## Project Structure
```
.
├── app.py                # Main Flask application
├── main.py               # Google Calendar integration logic
├── templates/            # HTML templates for the application
│   ├── base.html
│   ├── create_template.html
│   └── index.html
├── credentials.json      # Google API credentials (not included); will help you download token.json
└── README.md             # Documentation
```

---

## Usage
### Adding a Template:
1. Navigate to the "Add Template" page.
2. Fill in the required details (name, description, email ID).
3. Submit the form to store the template in the database.

### Scheduling Events:
1. The Google Calendar integration allows event creation by modifying `main.py`.
2. Customize the `event` object with your details and run `main.py` to add events to your Google Calendar.

---

## Future Improvements
- Implement user authentication for secure access.
- Add validation for database inputs to prevent SQL injection.
- Enhance the UI with modern design frameworks (e.g., Bootstrap).
- Allow dynamic event scheduling through the web interface.
- Planning on using MERN Stack.

---

## Contributing
1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes and push them.
4. Submit a pull request for review.

---

## License
This project is licensed under the MIT License. See `LICENSE` for more information.
