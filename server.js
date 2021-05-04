const express = require("express");
const userRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

const port = process.env.PORT || "3000";

app.listen(port, () => console.log(`Server is running on port ${port}`));
