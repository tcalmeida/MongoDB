import Connection from "./Conection";

const mongoDB = new Connection("mongodb://127.0.0.1:27017/blog");

export { mongoDB };
