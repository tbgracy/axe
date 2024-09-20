import path from "path";
import { ChildProcess, fork } from "child_process";
import findRootDir from "./findRootDir";
import isDev from "./isDev";

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
    const appRootDir = findRootDir(__dirname);
    const yWebsocketServerPath = `${isDev() ? "../.." : appRootDir}/node_modules/y-websocket/bin/server.cjs`;
    console.log(process.resourcesPath);
    websocketServerProcess = fork(
      path.join(isDev() ? __dirname : "", yWebsocketServerPath),
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
