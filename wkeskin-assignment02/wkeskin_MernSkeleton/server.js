//Importing Required Modules
const express = require("express"); //To create an Express application
const path = require("path"); //To work with file and directory paths

//Creating an Express Application
const app = express(); //Initializes the Express application

const assetsRouter = require("./server/assets-router");
app.use("/src", assetsRouter);


//Serving Static Files
app.use("/", express.static(path.join(__dirname, "public"))); //This middleware serves static files from the public directory when the root URL (/) is accessed

//API Endpoint
app.get("/api/v1", (req, res) => { //Defines a route handler for GET requests to /api/v1
    res.json({ //Sends a JSON response with details about the project
        project: "React and Express Boilerplate",
        from: "Vanaldito",
    });
});
//Catch-All Route for Client-Side Routing
app.get("/*", (_req, res) => { //Defines a catch-all route for all other requests (not matching any previous routes)
    res.sendFile(path.join(__dirname, "public", "index.html")); //Serves the index.html file from the public directory. This is useful for single-page applications (SPAs) where the client-side routing is handled by JavaScript.

})
//Starting the Server
const { PORT = 5000 } = process.env;
app.listen(PORT, () => {
    console.log();
    console.log(` App running in port ${PORT}`);
    console.log();
    console.log(` > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});

/*Summary Point
- Static File Serving: Serves static files from the public directory.
- API Endpoint: Provides a simple JSON response at /api/v1.
- Catch-All Route: Serves index.html for all other routes, supporting single-page applications.
- Server Initialization: Starts the server on a specified port, defaulting to 5000 if not set in the environment variables, and logs the server's address to the console.

*/
