#!/usr/bin/env python3

import speech_recognition as sr
import time
from DHT11Test import temp
import lights
# this is called from the background thread
def callback(recognizer, audio):
    # received audio data, now we'll recognize it using Google Speech Recognition
    try:
        # for testing purposes, we're just using the default API key
        # to use another API key, use `r.recognize_google(audio, key="GOOGLE_SPEECH_RECOGNITION_API_KEY")`
        # instead of `r.recognize_google(audio)`
        test_val = recognizer.recognize_google(audio)
        print("You said " + test_val)
        if "weath" in test_val.lower():
            lights.wind()
        elif "gard" in test_val.lower():
            lights.garden()
        elif "bed" in test_val.lower():
            lights.bedroom()
        elif "livin" in test_val.lower():
            lights.living_room()
        
    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand audio")
    except sr.RequestError as e:
        print("Could not request results from Google Speech Recognition service; {0}".format(e))

def main():
    stop_program_flag = True    
    r = sr.Recognizer()
    m = sr.Microphone()
    with m as source:
        print ('Calibrating microphone..')
        r.adjust_for_ambient_noise(source)  # we only need to calibrate once, before we start listening
        
        print ('Calibration succeed')
    # start listening in the background (note that we don't have to do this inside a `with` statement)
    stop_listening = r.listen_in_background(m, callback)
    
    #in paralel run the logic of application
    while stop_program_flag:
        time.sleep(0.1)
        

    # calling this function requests that the background listener stop listening
    stop_listening(wait_for_stop=False) 
    
    
if __name__ == "__main__":
    main()


