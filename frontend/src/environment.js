const IS_PROD = true;
const server =
  IS_PROD == true
    ? "https://videochat-lsp1.onrender.com/"
    : "http://localhost:8000";

export default server;
