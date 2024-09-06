import path from "path";
import { ChildProcess, fork } from "child_process";

let serverProcess: ChildProcess | undefined;

export function startServer() {
  if (!serverProcess) {
    serverProcess = fork(path.join(__dirname, "server.js"));
    serverProcess.on("message", (message) => {
      console.log("Message  from server : ", message);
    });

    serverProcess.on("exit", (code) => {
      console.log(`Server process exited with code ${code}`);
      serverProcess = undefined;
    });
  }
}

export function stopServer() {
  if (serverProcess) {
    serverProcess.kill();
  }
}
