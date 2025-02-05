# 🚗 RDW Kenteken Checker

## A simple vehicle license plate checker built with Node.js and the RDW Open Data API.

This project allows you to fetch vehicle information based on license plate numbers using the RDW (Rijksdienst voor het Wegverkeer) Open Data API. It's built with a **Node.js Express server** and a clean, responsive **frontend**.

### 🔧 Technologies Used
- 🖥️ **Node.js** – JavaScript runtime for the server
- ⚡ **Express.js** – Web framework for creating the API server
- 🌐 **RDW Open Data API** – For fetching vehicle data
- 💻 **HTML, CSS, and JavaScript** – For frontend structure and design
- 🛠️ **dotenv** – For managing environment variables (API keys)

### 🚀 Features
✅ **Real-time License Plate Lookup** – Fetch vehicle data from the RDW API  
✅ **Responsive UI** – Works seamlessly on desktop and mobile devices  
✅ **Simple Backend** – Fetches and displays vehicle information in a clean format  
✅ **No API Key Exposure** – API keys securely handled through environment variables  

### 📸 Preview  
The app can be viewed locally by running the server and opening `index.html` in a browser.  

### 📝 Installation  
To run the project locally, follow these steps:

1. **Clone the repository**  
   Open your terminal or command prompt and run:
   ```bash
   git clone https://github.com/Sharkvy/-kentekencheck.git
2. **Navigate into the project directory**  
   Change to the project folder:
   ```bash
   cd -kentekencheck
3. **Install dependencies**  
   Install all the required Node.js dependencies by running:
   ```bash
   npm install
4. **Set up your environment variables**  
   Create a .env file in the root directory of the project and add your RDW API keys as follows:
   ```bash
   KEY_ID=your-key-id
   SECRET_KEY=your-secret-key
5. **Start the server**  
   Start the server by running the following command:
   ```bash
   npm start
6. **Open the frontend**  
   Go to the `index.html` in your browser to interact with the RDW Kenteken Checker.



