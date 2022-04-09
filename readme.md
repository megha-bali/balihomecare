# Bali Home care services

# URL

[https://balihomecare.herokuapp.com/]

This is website developed for Fullstack developement course 4836 using Node Js, Express Js,
The purpose of my website is to help people who need special medical care at home on daily basis without going to any hospital or nursing home. One of my relatives work for this purpose so I thought to create a website so as to their services could go to as many people.
For now this website is for admin side who can add update detail of the services provided.

# Commands

Clone this project to your local system. Open the project in any Code Editor like VS code, Open terminal, cd to your folder and run following commands

> npm install
> npm run watch
> npm run dev

# Features Added:

1. Single Page application
2. Image is stored in the form of base64 encoded data
3. Adding and Updating Services with Name/Title, description and Image (Used single form for both based on the properties available)
4. Handle toggle button between List view and Grid view
5. Enabled Mobile View
6. Timeout on error messages after 3 seconds, Error messages will disappear after 3 seconds
7. Added 404 Error HTML Page

# Resources of content and Images:

Images: pinterest.com, unsplash.com
Content: https://en.wikipedia.org/wiki/Home_care

# Endpoints:

Database used : MongoDB

1. GET '/api/v1/services/' : to get list of services from the database
   return list of services as:
   data: [{_id: "624d0739fc5f3fdbf4c0f614", name: "Activities of daily living",…},…]
   message: "Result found!"
   status: 200
2. GET '/api/v1/services/:search' : to get list of services on the basis of search entity entered by the user
   Example:
   Request Url: /api/v1/services/eld
   Response:
   data: [{_id: "624e2a18a069607a4bd43e45", name: "Elderly Care",…}]
   message: "Result found!"
   status: 200
   Url: /api/v1/services/aaa
   data: []
   message: "No Records found!"
   status: 200

3. GET '/api/v1/services/:id' : to get the service with object id. (this is not used for the time being on the front end, created this api
   for future enhacements)

4. POST '/api/v1/services/' : to add the service to the database
   CONTENT-TYPE: application/json
   Mandatory fields: Name and Description, if image is not uploaded default image will be shown.
   Request Payload:
   {
   name: "ServiceName",
   description: "Description of the service",
   img: base64 format of image
   }
   Response:
   {message: "Service detail successfully saved!", url: "/api/v1/services/6250cc71350857590496d712",…}
   data: {name: "Patient's health Status",…}
   links: [{rel: "self", method: "POST", href: "/api/v1/services/6250cc71350857590496d712"},…]
   message: "Service detail successfully saved!"
   url: "/api/v1/services/6250cc71350857590496d712"
5. PATCH '/api/v1/services/:id' : to update the service to the database, id is the Object Id created by the mongo db
   CONTENT-TYPE: application/json
   Mandatory fields: Name and Description, if image is not uploaded default image will be shown.
   Request Payload:
   {
   name: "ServiceName",
   description: "Description of the service",
   img: base64 format of image
   }
   example:
   api/v1/services/624e2953a069607a4bd43e42
   Response:
   {data: {name: "Physiotherapy",…}
   links: [{rel: "self", method: "PATCH", href: "/api/v1/services/624e2953a069607a4bd43e42"},…]
   message: "Service detail updated successfully!"
   url: "/api/v1/services/624e2953a069607a4bd43e42"}

6. DELETE '/api/v1/services/:id' : to delete the service from the database, id is the Object Id created by the mongo db
   CONTENT-TYPE: application/json
   Example:
   /api/v1/services/6250cc71350857590496d712
   Response:
   {"url":"/api/v1/services/","message":"Service deleted successfully!","links":[{"rel":"self","method":"GET","href":"/api/v1/services/"},{"rel":"delete","method":"DELETE","title":"Delete Location","href":"/api/v1/services/6250cc71350857590496d712"}]}

# How to use The website
