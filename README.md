Start the Backend

Open a terminal in your project root folder (where server.js is).

Run:

npm start


You should see:

Connected To Mongodb Database ...
Server Running on development mode on port 8080


✅ Leave this terminal running (don’t close it).

Start the Frontend

Open a new terminal (don’t stop backend).

Go into the client folder:

cd client
npm start


This will start your React frontend on http://localhost:3000.
3. Open in Browser

Open:

Frontend: http://localhost:3000

Backend APIs (optional test): http://localhost:8080/api/v1/category/get-category

React will use the proxy (configured in client/package.json) to talk to backend at http://localhost:8080.

