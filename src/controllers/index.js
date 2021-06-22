const index = (req,res) => {
    res.render("index", {title: "XD", data: ["a", "b", "c"]})
}, sessions = (req,res) => {
    res.render("sessions", {title: "sessions"})
};

module.exports = { index, sessions };