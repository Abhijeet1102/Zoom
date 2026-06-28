let IS_PROD = true;
const server = IS_PROD ?
    (process.env.REACT_APP_BACKEND_URL || "https://apnacollegebackend.onrender.com") :
    "http://localhost:8000";


export default server;