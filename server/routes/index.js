const notes = require("./notes");

module.exports = (app) => {
    app.use("/api/notes", notes);
};
