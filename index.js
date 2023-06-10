const Gpio = require('onoff').Gpio;
const dhtSensor = require('node-dht-sensor');

const sensorPin = 4; // Reemplaza con el número de pin GPIO correcto

// Configura el pin GPIO para lectura
const sensor = new Gpio(sensorPin, 'in', 'both');

// Función para leer los datos del sensor
function readSensorData() {
  const readout = dhtSensor.read(11, sensorPin); // Usamos el tipo de sensor 11 para el DHT11

  console.log(`Temperatura: ${readout.temperature.toFixed(2)}°C`);
  console.log(`Humedad: ${readout.humidity.toFixed(2)}%`);
}

// Lee los datos del sensor cada 2 segundos
setInterval(readSensorData, 2000);

// Manejo de errores y limpieza al salir
process.on('SIGINT', () => {
  sensor.unexport();
  process.exit();
});