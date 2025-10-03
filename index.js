/**
 * @autor: Harol Mauricio Gómez Zapata
 * @fecha: 25/08/2025
 * @descripcion: Pequeña aplicación para probar
 *               una base de datos en un contenedor
 *               Docker
 */

import express from "express";
import mongoose from "mongoose";

const app = express();

// Esquema y modelo
const Usuarios = mongoose.model(
  "Usuarios",
  new mongoose.Schema({
    usuario: String,
    correo: String,
    clave: String,
  })
);

// URI de conexión a MongoDB Atlas
const mongoUri =
  "mongodb+srv://santiagoespinal1022_db_user:santi12345678ysgDF@cluster0.arbryuy.mongodb.net/mibd?retryWrites=true&w=majority&appName=Cluster0";

// Conexión a MongoDB
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Conexión exitosa a MongoDB Atlas"))
  .catch((err) => {
    console.error("❌ Error al conectar a MongoDB Atlas:", err);
    process.exit(1);
  });

// Rutas
app.get("/", async (_req, res) => {
  console.log("listado de usuarios ...");
  const usuarios = await Usuarios.find();
  return res.send(usuarios);
});

app.get("/crear", async (_req, res) => {
  console.log("Insertando ...");
  await Usuarios.create({
    usuario: "harol",
    correo: "hmgomezz@sena.edu.co",
    clave: "12345",
  });
  return res.send("OK");
});

app.get("/nueva", (_req, res) => res.send("ruta creada en desarrollo OK"));
app.get("/otra", (_req, res) => res.send("ruta creada en desarrollo OK"));
app.get("/de_nuevo", (_req, res) => res.send("ruta creada en desarrollo OK"));

// Iniciar servidor
app.listen(3000, () => console.log("🚀 Escuchando en el puerto: 3000"));
