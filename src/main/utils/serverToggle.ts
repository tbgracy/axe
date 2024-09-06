import path from "path";
import { ChildProcess, fork } from "child_process";

let expressServerProcess: ChildProcess | undefined;

let websocketServerProcess: ChildProcess | undefined;

export function startServer() {
  if (!expressServerProcess) {
    expressServerProcess = fork(path.join(__dirname, "server.js"));
    expressServerProcess.on("message", (message) => {
      console.log("Message  from express server : ", message);
    });

    expressServerProcess.on("exit", (code) => {
      console.log(`Express server process exited with code ${code}`);
      expressServerProcess = undefined;
    });
  }

  if (!websocketServerProcess) {
    websocketServerProcess = fork(
      path.join(__dirname, "../../node_modules/y-websocket/bin/server.cjs"),
      {
        env: {
          HOST: "0.0.0.0",
          PORT: "1234",
        },
      }
    );
    websocketServerProcess.on("message", (message) => {
      console.log("Message from y-websocket server: ", message);
    });

    websocketServerProcess.on("exit", (code) => {
      console.log(`y-websocket server process exited with code ${code}`);
      websocketServerProcess = undefined;
    });
  }
}

export function stopServer() {
  if (expressServerProcess) {
    expressServerProcess.kill();
  }
  if (websocketServerProcess) {
    websocketServerProcess.kill();
  }
}
