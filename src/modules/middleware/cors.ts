import Cors from "cors";
import initMiddleware from "./initMiddleware";

const cors = initMiddleware(
  Cors({
    credentials: true,
    origin: ["https://studio.apollographql.com"],
  })
);

export { cors };
