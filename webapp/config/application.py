import RPi.GPIO as GPIO
import time
import Adafruit_DHT

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(21,GPIO.OUT)

sensor = Adafruit_DHT.DHT11
pin = 11 # replace 4 by the number of pin in which your DHT11 is wired
humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)

if temeretaure>30:
	print "LED on"
	GPIO.output(21,GPIO.HIGH) #replace 21 by the number of pin in which your LED is wired
	time.sleep(10)
else:
	print "LED off"
	GPIO.output(21,GPIO.LOW) #replace 21 by the number of pin in which your LED is wired