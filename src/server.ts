import express from "express"
import { CityBikesRouters } from "./routes";

const app = express();
const PORT = 1337;
const HOST = "localhost"

app.use(CityBikesRouters)

app.listen(PORT, HOST, () => {
    console.log(`Server started @ ${HOST}:${PORT}`);
});