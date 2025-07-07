Live Project ::https://corona-api-theta.vercel.app/

![Screenshot 2025-07-07 203912](https://github.com/user-attachments/assets/fac875ac-af10-4064-aa1d-8c05bb171294)


📄 Project Documentation: COVID-19 India Tracker

🔖 Project Title:

COVID-19 India Tracker

🏢 Organization:


Developer: Parmar Isha Miteshkumar
Project Type: Web-based Dashboard
Technology Stack: HTML, CSS, Bootstrap, JavaScript, API Integration

📌 Objective:

To design and develop a responsive web application that tracks and displays COVID-19 statistics across India, both at the national and state level, using real-time data from an open API.

🔧 Technologies Used:

Technology	Purpose
HTML5	              Page structure and content

CSS3	              Styling and visual layout

Bootstrap 5        	Responsive design and layout

JavaScript	        API fetching and DOM manipulation

REST API	          Fetching real-time COVID-19 data

GitHub	            (Optional) Version control


🌐 API Source:

Rootnet API:

https://api.rootnet.in/covid19-in/stats/latest
Provides up-to-date COVID-19 statistics for India.

📁 Project Structure:

/project-folder

├── index.html        # Main HTML file

├── script.js         # JavaScript for API fetch and interaction

└── (Bootstrap CDN)   # External link for responsive design

🖥️ Features:

✅ Displays total confirmed, recovered, and death cases for India.

✅ Dropdown to select a state and view its statistics.

✅ Real-time data fetching from the Rootnet COVID-19 API.

✅ Responsive design that works across devices.

✅ Stylish UI with Bootstrap and custom gradients.


🔄 Workflow Description:\

HTML (index.html):

Creates layout using Bootstrap grid system.

Contains card elements for total cases and a dropdown for states.

Placeholder divs for dynamic data updates.

JavaScript (script.js):

Fetches data from the Rootnet COVID-19 API.

Displays total confirmed, deaths, and discharged cases.

Populates the state dropdown dynamically.

Displays selected state’s statistics upon selection.

Styling (in <style> inside HTML):

Gradient backgrounds for each card type.

Responsive layout and UI enhancements using CSS and Bootstrap.


📸 UI Screenshots:

(You can add screenshots here of the homepage, state selection dropdown, and stats display.)

🚀 How to Run:

Open index.html in a browser with internet access.

The site will automatically fetch and display data.

Select a state from the dropdown to view its individual statistics.

🧪 Testing:

Test Case	Expected Result	Status

API loads successfully	Shows total and state stats	✅

State dropdown interaction	Shows state-wise data	✅

API fails to load	Shows "Error" in all fields	✅

Mobile device layout	Fully responsive	✅

📈 Future Enhancements:

Add graphs or charts using Chart.js.

Enable historical data viewing.

Add search functionality for faster state access.

Provide multilingual support.

🧾 Credits:

Data Source: Rootnet Open API

Framework: Bootstrap CDN

Developer: Parmar Isha Miteshkumar
