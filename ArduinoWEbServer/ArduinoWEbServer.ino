#include <DHT.h>

#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <ESP8266WiFiMulti.h>
ESP8266WiFiMulti wifiMulti;
#ifndef STASSID
#define STASSID "Kid"
#define STAPSK  "aaaabbbb"
#endif
#define DHTTYPE DHT12   // DHT 11
//#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
const char* ssid = STASSID;
const char* password = STAPSK;
int Ro = 10;
#define DHTPIN D2  
DHT dht(DHTPIN, DHTTYPE);
ESP8266WebServer server(80);
#define MQ2 A0     
const int led = 13;

void handleRoot() {
  digitalWrite(led, 1);
  server.send(200, "text/plain", "hello from esp8266!");
  digitalWrite(led, 0);
}

void handleNotFound() {
  digitalWrite(led, 1);
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i = 0; i < server.args(); i++) {
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.send(404, "text/plain", message);
  digitalWrite(led, 0);
}

void setup(void) {

  Serial.begin(115200);

  Serial.println("");
  dht.begin();
   WiFi.mode(WIFI_STA);
  wifiMulti.addAP(ssid, password);
 
  Serial.print("Connecting to wifi");
  while (wifiMulti.run() != WL_CONNECTED) {
    Serial.print(".");
    delay(100);
  }
  Serial.println();
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  if (MDNS.begin("esp8266")) {
    Serial.println("MDNS responder started");
  }

  server.on("/", handleRoot);

  server.on("/temp", []() {
    server.send(200, "text/plain", String(dht.readTemperature()));
  });
  server.on("/humd", []() {
    server.send(200, "text/plain", String(dht.readHumidity()));
  });
  
  server.on("/gas", []() {
    float mq2_read = analogRead(MQ2);
    server.send(200, "text/plain", String(mq2_read));
  });
  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started");
}

void loop(void) {
  server.handleClient();
  MDNS.update();
}
