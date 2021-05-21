import { Room } from "colyseus";
var AnzahlSpieler = 0;
var zählerListe = [];
export class gruselino extends Room {
  maxClients = 4;

  player1 = null;
  player2 = null;
  player3 = null;
  player4 = null;

  onInit(options) {
    console.log("BasicRoom created!", options);
  }

  onJoin(client) {
    AnzahlSpieler++;
    console.log(AnzahlSpieler);
    let newPlayer = {
      id: client.sessionId,
      client: client,
    };
    if ((this.player1 == null)) this.player1 = newPlayer;
  else if ((this.player2 == null)) this.player2 = newPlayer;
  else if ((this.player3 == null)) this.player3 = newPlayer;
  else if ((this.player4 == null)) this.player4 = newPlayer;
    console.log(" - " + this.player1 + " - " + this.player2 + " - " + this.player3 + " - " + this.player4 + " - ")
    if (AnzahlSpieler > 1) {
        this.send(this.player1.client, {"type":"player", "data":0});
        this.send(this.player2.client, {"type":"player", "data":1});
        if (AnzahlSpieler > 2 && !(this.player3 == null)) this.send(this.player3.client, {"type":"player", "data":2});
        if (AnzahlSpieler > 3 && !(this.player4 == null)) this.send(this.player4.client, {"type":"player", "data":3});
        this.broadcast({"type": "AnzahlSpieler", "data": AnzahlSpieler});
    }
}

  onLeave(client) {
    if (!(client == null || client == undefined)) {
    AnzahlSpieler--;
    if (client.sessionId === this.player1.id) this.player1 = null
    if (client.sessionId === this.player2.id) this.player2 = null
    if (client.sessionId === this.player3.id) this.player3 = null
    if (client.sessionId === this.player4.id) this.player4 = null
  }
    console.log("a Player left");
    console.log(AnzahlSpieler);
    console.log(this.player1  + " - " + this.player2  + " - " + this.player3  + " - " + this.player4)
  }

  onMessage(client, data) {
//    console.log(data.message);
    this.broadcast(data.message);
  }

  onDispose() {
    console.log("Dispose BasicRoom");
  }

}
