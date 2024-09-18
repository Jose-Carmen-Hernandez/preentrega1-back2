import mongoose from "mongoose";

export const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { dbName: process.env.DB_NAME });
    console.log('DDBB connected')
  } catch (e) {
    console.log('Error al conectarse a la bbdd');
  }
}
