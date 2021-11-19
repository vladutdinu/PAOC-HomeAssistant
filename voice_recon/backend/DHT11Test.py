import time
import board
import adafruit_dht
import RPi.GPIO as GPIO
#Initial the dht device, with data pin connected to:
dhtDevice = adafruit_dht.DHT11(board.D17)

def temp():
     try:
         # Print the values to the serial port
         temperature_c = dhtDevice.temperature
         temperature_f = temperature_c * (9 / 5) + 32
         humidity = dhtDevice.humidity
         print("Temp: {:.1f} F / {:.1f} C    Humidity: {}% "
               .format(temperature_f, temperature_c, humidity))
         return temperature_c, humidity
     except RuntimeError as error:     # Errors happen fairly often, DHT's are hard to read, just keep going
         print(error.args[0])

if __name__ == "__main__":
     while True:
          try:
               # Print the values to the serial port
               temperature_c = dhtDevice.temperature
               temperature_f = temperature_c * (9 / 5) + 32
               humidity = dhtDevice.humidity
               print("Temp: {:.1f} F / {:.1f} C    Humidity: {}% "
                         .format(temperature_f, temperature_c, humidity))
          except RuntimeError as error:     # Errors happen fairly often, DHT's are hard to read, just keep going
               print(error.args[0])
          time.sleep(2.0)
