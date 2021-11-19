import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(22, GPIO.OUT)
def led():
    print("Led on")
    GPIO.output(22, GPIO.HIGH)

    time.sleep(2)
    print("Led off")
    GPIO.output(22, GPIO.LOW)

if __name__ == "__main__":
    led()