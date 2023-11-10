import { isAppEnabled } from "./config.ts";

const app = () => {
  setInterval(() => {
    document.getElementById("epoch-seconds")!.textContent = `${Math.floor(
      Date.now() / 1000
    )}`;
  }, 1000);
};

if (isAppEnabled) {
  app();
}
