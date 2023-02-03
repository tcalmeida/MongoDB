import { connect } from "mongoose";

export default class Connection {
  private db_connection_string: string;

  constructor(db_connection_string: string) {
    this.db_connection_string = db_connection_string;
  }

  async createConnection() {
    try {
      await connect(this.db_connection_string)
      console.info("Database connected")


    }catch (error) {
      console.error(error)
    }


  }
 
}
