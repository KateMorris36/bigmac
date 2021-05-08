# Quick Guide

'npm run dev' from Server Folder to start up the API Server

'npm start' from Client Folder to start up the React App

# Explanation of Work

Server

- Big Mac Router
  - Express Routing with middleware for IP Lookup
  - API endpoint : GET only (<host>/api/bigMac)
- Big Mac Model
  - On server start parse CSV of Locations and filter to have 1 unique per location with the latest data
- Big Mac Controller
  - GET returns a list of 2 locations big mac data [your location, random location]
- Big Mac Unit Tests

  - Tests endpoint for GET return a value of 2 locations

- IP Vigilante
  - Encountered Error with this API (403 error not allowing me to connect)
- IP Stack

  - Alternative to Vigilante to retrieve location data from IP Address
  - with .env NODE_DEV_ENV set to true, will default to an ip address in US

- Data Folder
  - CSV is stored here for parsing on start-up

Client

- Big Mac Component

  - simple 1 page that loads the location data at the start
  - Math is updated dynamically based on the budget field

- App Testing
  - Tests the Loading and Axios Calls of the APp and BigMac Component
