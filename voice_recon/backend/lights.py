import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(18, GPIO.OUT) #18, 23, 25, 20
GPIO.setup(20, GPIO.OUT) 
GPIO.setup(26, GPIO.OUT) 
GPIO.setup(25, GPIO.OUT) 
def bedroom(on):
    if on == 1:
        print("Led on")
        GPIO.output(26, GPIO.HIGH)
    elif on != 1:
        print("Led off")
        GPIO.output(26, GPIO.LOW)

def living_room(on):
    if on == 1:
        print("Led on")
        GPIO.output(25, GPIO.HIGH)
    elif on != 1:
        print("Led off")
        GPIO.output(25, GPIO.LOW)


def garden(on):
    if on == 1:
        print("Led on")
        GPIO.output(20, GPIO.HIGH)
    elif on != 1:
        print("Led off")
        GPIO.output(20, GPIO.LOW)

def wind():
    print("motor on")
    GPIO.output(18, GPIO.HIGH)

    time.sleep(2)
    print("motor off")
    GPIO.output(18, GPIO.LOW)  

if __name__ == "__main__":
    bedroom()
    living_room()
    garden()
    wind()