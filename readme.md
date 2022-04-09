# Bali Home care services

# URL

https://balihomecare.herokuapp.com/

This is website developed for Fullstack developement course 4836 using Node Js, Express Js,
The purpose of my website is to help people who need special medical care at home on daily basis without going to any hospital or nursing home. One of my relatives work for this purpose so I thought to create a website so as to their services could go to as many people.
For now this website is for admin side who can add update detail of the services provided.

# Commands

# Git Repository

https://github.com/megha-bali/balihomecare.git

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
8. When open in mobile mode, menu will be changed to hamburger icon and I have implemented this using the native JS

# Resources of content and Images:

Images: pinterest.com, unsplash.com
Content: https://en.wikipedia.org/wiki/Home_care

# Endpoints:

Database used : MongoDB

1. GET 'balihomecare.herokuapp.com/api/v1/services/' : to get list of services from the database
   return list of services as:
   data: [{_id: "624d0739fc5f3fdbf4c0f614", name: "Activities of daily living",…},…]
   message: "Result found!"
   status: 200
2. GET 'balihomecare.herokuapp.com/api/v1/services/:search' : to get list of services on the basis of search entity entered by the user
   Example:
   Request Url: balihomecare.herokuapp.com/api/v1/services/eld
   Response:
   data: [{_id: "624e2a18a069607a4bd43e45", name: "Elderly Care",…}]
   message: "Result found!"
   status: 200
   Url: balihomecare.herokuapp.com/api/v1/services/aaa
   data: []
   message: "No Records found!"
   status: 200

3. GET 'balihomecare.herokuapp.com/api/v1/services/:id' : to get the service with object id. (this is not used for the time being on the front end, created this api
   for future enhacements)

4. POST 'balihomecare.herokuapp.com/api/v1/services/' : to add the service to the database
   CONTENT-TYPE: application/json
   Mandatory fields: Name and Description, if image is not uploaded default image will be shown.
   Request Payload:
   {
   name: "ServiceName",
   description: "Description of the service",
   img: base64 format of image
   }
   Response:
   {message: "Service detail successfully saved!", url: "balihomecare.herokuapp.com/api/v1/services/6250cc71350857590496d712",…}
   data: {name: "Patient's health Status",…}
   links: [{rel: "self", method: "POST", href: "balihomecare.herokuapp.com/api/v1/services/6250cc71350857590496d712"},…]
   message: "Service detail successfully saved!"
   url: "balihomecare.herokuapp.com/api/v1/services/6250cc71350857590496d712"
5. PATCH 'balihomecare.herokuapp.com/api/v1/services/:id' : to update the service to the database, id is the Object Id created by the mongo db
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
   links: [{rel: "self", method: "PATCH", href: "balihomecare.herokuapp.com/api/v1/services/624e2953a069607a4bd43e42"},…]
   message: "Service detail updated successfully!"
   url: "balihomecare.herokuapp.com/api/v1/services/624e2953a069607a4bd43e42"}

6. DELETE 'balihomecare.herokuapp.com/api/v1/services/:id' : to delete the service from the database, id is the Object Id created by the mongo db
   CONTENT-TYPE: application/json
   Example:
   balihomecare.herokuapp.com/api/v1/services/6250cc71350857590496d712
   Response:
   {"url":"balihomecare.herokuapp.com/api/v1/services/","message":"Service deleted successfully!","links":[{"rel":"self","method":"GET","href":"balihomecare.herokuapp.com/api/v1/services/"},{"rel":"delete","method":"DELETE","title":"Delete Location","href":"balihomecare.herokuapp.com/api/v1/services/6250cc71350857590496d712"}]}

# How to use The website

1. Got to the link https://balihomecare.herokuapp.com/ There is a menu on landing page.
2. Care services will take you to the list of services provided.
3. There is a button to add new Service, click on it and you will get a popup form having the name, description and image fields. Add the  
   details and click the "create service" button, new service will be added and the list will be updated.
4. There is one button along with add button to toggle between list view and grid view of the list
5. In search field you may enter any text and it will search the list on the basis of name and description
6. In the list hover over any list item, Edit and delete icons will appear.
7. On clicking of edit button, Edit form popup will open to modify the data.
8. About will take you to the section of About us.
9. Contact will take you to the Contact details section
10. On the footer I have provided the resources of the images and content used for the application
