// console.log("start");
console.log();

import http, { ServerResponse, createServer } from "http";

const server = createServer(
  (req: http.IncomingMessage, res: ServerResponse<http.IncomingMessage>) => {
    const chromeSide = req.rawHeaders[7].split('"')[1];
    const postManSide = req.rawHeaders[6].split("-")[0];

    if (chromeSide === undefined) {
      res.write(`You are using "${postManSide}" browser to access me!`);
    } else {
      res.write(`You are using "${chromeSide}" browser to access me!`);
    }
    res.end();
  }
);

server.on("connection", () => {
  console.log("A User Connected!!!");
});

server.listen(5000, () => {
  console.log("Server is up and running!!!");
});

// import http, { IncomingMessage, ServerResponse, createServer } from "http";

// const server = createServer(
//   (req: http.IncomingMessage, res: ServerResponse<http.IncomingMessage>) => {
//     const Windows = req.rawHeaders[11].split('"')[1];
//     // console.log(Windows);

//     res.write(`You are using "${Windows}" OS to access me!`);

//     if (Windows === undefined) {
//       res.write(`You are using "Windows" OS to access me!`);
//     } else {
//       res.write(`You are using "${Windows}" OS to access me!`);
//     }
//     res.end();
//   }
// );

// server.on("connection", () => {
//   console.log("A User has connected!");
// });

// server.listen(5000, () => {
//   console.log("Server is up and running!");
// });
