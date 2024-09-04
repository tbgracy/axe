import os from "os";

export default function getIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < (iface?.length ?? 0); i++) {
      const alias = iface![i];
      if (
        alias.family === "IPv4" &&
        alias.address != "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
  return "0.0.0.0";
}
