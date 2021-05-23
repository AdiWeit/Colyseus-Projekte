import path from 'path';
import express from 'express';
import serveIndex from 'serve-index';
import { createServer } from 'http';
import { Server } from 'colyseus';
import { monitor } from '@colyseus/monitor';

// Import demo room handlers
// import { ChatRoom } from "./rooms/01-chat-room";
// import { StateHandlerRoom } from "./rooms/02-state-handler";
// import { AuthRoom } from "./rooms/03-auth";
// import { CreateOrJoinRoom } from "./rooms/04-create-or-join-room";
import { SchereSteinPapierRoom } from "./rooms/SchereSteinPapier";
import { vierGewinntRoom } from "./rooms/4gewinnt";
import { heldenDesOlympRoom } from "./rooms/heldenDesOlymp";
import { monopolyKartenspiel } from "./rooms/monopolyKartenspiel";
import { monopolyKartenspiel_4_Spieler } from "./rooms/monopolyKartenspiel_4_Spieler";
import { monopolyKartenspiel_3_Spieler } from "./rooms/monopolyKartenspiel_3_Spieler";
import { gruselino } from "./rooms/gruselino";
import { snakeGame } from "./rooms/snakeGame";
import { davincicode } from "./rooms/davincicode";
import { dasVerrueckteLabyrinth_2_Spieler } from "./rooms/dasVerrueckteLabyrinth_2_Spieler";
import { dasVerrueckteLabyrinth_3_Spieler } from "./rooms/dasVerrueckteLabyrinth_3_Spieler";
import { dasVerrueckteLabyrinth_4_Spieler } from "./rooms/dasVerrueckteLabyrinth_4_Spieler";
import { galgenmaennchen_2_Spieler } from "./rooms/galgenmaennchen_2_Spieler";
import { galgenmaennchen_3_Spieler } from "./rooms/galgenmaennchen_3_Spieler";
import { galgenmaennchen_4_Spieler } from "./rooms/galgenmaennchen_4_Spieler";
import { guessTheValue_2_Spieler } from "./rooms/guessTheValue_2_Spieler";
import { guessTheValue_3_Spieler } from "./rooms/guessTheValue_3_Spieler";
import { guessTheValue_4_Spieler } from "./rooms/guessTheValue_4_Spieler";
import { Kaesekaestchen_2_Spieler } from "./rooms/Kaesekaestchen_2_Spieler";
import { Kaesekaestchen_3_Spieler } from "./rooms/Kaesekaestchen_3_Spieler";
import { Kaesekaestchen_4_Spieler } from "./rooms/Kaesekaestchen_4_Spieler";
import { Suchlabyrinth_2_Spieler } from "./rooms/Suchlabyrinth_2_Spieler";
import { Suchlabyrinth_3_Spieler } from "./rooms/Suchlabyrinth_3_Spieler";
import { Suchlabyrinth_4_Spieler } from "./rooms/Suchlabyrinth_4_Spieler";
import { stratego } from "./rooms/stratego";
import { uno_2_Spieler } from "./rooms/uno_2_Spieler";
import { uno_3_Spieler } from "./rooms/uno_3_Spieler";
import { uno_4_Spieler } from "./rooms/uno_4_Spieler";
import { zeichenbattle_2_Spieler } from "./rooms/zeichenbattle_2_Spieler";
import { zeichenbattle_3_Spieler } from "./rooms/uno_3_Spieler";
import { zeichenbattle_4_Spieler } from "./rooms/uno_4_Spieler";
import { asFastAsYouCan_2_Spieler } from "./rooms/asFastAsYouCan_2_Spieler";
import { asFastAsYouCan_3_Spieler } from "./rooms/asFastAsYouCan_3_Spieler";
import { asFastAsYouCan_4_Spieler } from "./rooms/asFastAsYouCan_4_Spieler";
import { dieMaulwurfCompany_2_Spieler } from "./rooms/dieMaulwurfCompany_2_Spieler";
import { dieMaulwurfCompany_3_Spieler } from "./rooms/dieMaulwurfCompany_3_Spieler";
import { dieMaulwurfCompany_4_Spieler } from "./rooms/dieMaulwurfCompany_4_Spieler";
// import { hindernisFliegen } from "./rooms/hindernisFliegen";
// import { Test } from "./rooms/Test";

const port = Number(process.env.PORT || 2567);
const app = express();

// Attach WebSocket Server on HTTP Server.
const gameServer = new Server({
  server: createServer(app)
});

// Register ChatRoom as "chat"
// gameServer.register("chat", ChatRoom);

// Register ChatRoom with initial options, as "chat_with_options"
// onInit(options) will receive client join options + options registered here.
// gameServer.register("chat_with_options", ChatRoom, {
//     custom_options: "you can use me on Room#onInit"
// });

// Register StateHandlerRoom as "state_handler"
// gameServer.register("state_handler", StateHandlerRoom);

// Register StateHandlerRoom as "state_handler"
// gameServer.register("auth", AuthRoom);

// Register CreateOrJoin as "create_or_join"
// gameServer.register("create_or_join", CreateOrJoinRoom);

gameServer.register("schere_stein_papier", SchereSteinPapierRoom);

gameServer.register("4gewinnt", vierGewinntRoom);

gameServer.register("heldenDesOlymp", heldenDesOlympRoom);

gameServer.register("monopolyKartenspiel", monopolyKartenspiel);
gameServer.register("monopolyKartenspiel_4_Spieler", monopolyKartenspiel_4_Spieler);
gameServer.register("monopolyKartenspiel_3_Spieler", monopolyKartenspiel_3_Spieler);

gameServer.register("snakeGame", snakeGame);
gameServer.register("davincicode", davincicode);

gameServer.register("gruselino", gruselino);
gameServer.register("dasVerrueckteLabyrinth_2_Spieler", dasVerrueckteLabyrinth_2_Spieler);
gameServer.register("dasVerrueckteLabyrinth_3_Spieler", dasVerrueckteLabyrinth_3_Spieler);
gameServer.register("dasVerrueckteLabyrinth_4_Spieler", dasVerrueckteLabyrinth_4_Spieler);
gameServer.register("galgenmaennchen_2_Spieler", galgenmaennchen_2_Spieler);
gameServer.register("galgenmaennchen_3_Spieler", galgenmaennchen_3_Spieler);
gameServer.register("galgenmaennchen_4_Spieler", galgenmaennchen_4_Spieler);
gameServer.register("guessTheValue_2_Spieler", guessTheValue_2_Spieler);
gameServer.register("guessTheValue_3_Spieler", guessTheValue_3_Spieler);
gameServer.register("guessTheValue_4_Spieler", guessTheValue_4_Spieler);
gameServer.register("Kaesekaestchen_2_Spieler", Kaesekaestchen_2_Spieler);
gameServer.register("Kaesekaestchen_3_Spieler", Kaesekaestchen_3_Spieler);
gameServer.register("Kaesekaestchen_4_Spieler", Kaesekaestchen_4_Spieler);
gameServer.register("Suchlabyrinth_2_Spieler", Suchlabyrinth_2_Spieler);
gameServer.register("Suchlabyrinth_3_Spieler", Suchlabyrinth_3_Spieler);
gameServer.register("Suchlabyrinth_4_Spieler", Suchlabyrinth_4_Spieler);
gameServer.register("stratego", stratego);
gameServer.register("uno_2_Spieler", uno_2_Spieler);
gameServer.register("uno_3_Spieler", uno_3_Spieler);
gameServer.register("uno_4_Spieler", uno_4_Spieler);
gameServer.register("zeichenbattle_2_Spieler", zeichenbattle_2_Spieler);
gameServer.register("zeichenbattle_3_Spieler", zeichenbattle_3_Spieler);
gameServer.register("zeichenbattle_4_Spieler", zeichenbattle_4_Spieler);
gameServer.register("asFastAsYouCan_2_Spieler", asFastAsYouCan_2_Spieler);
gameServer.register("asFastAsYouCan_3_Spieler", asFastAsYouCan_3_Spieler);
gameServer.register("asFastAsYouCan_4_Spieler", asFastAsYouCan_4_Spieler);
gameServer.register("dieMaulwurfCompany_2_Spieler", dieMaulwurfCompany_2_Spieler);
gameServer.register("dieMaulwurfCompany_3_Spieler", dieMaulwurfCompany_3_Spieler);
gameServer.register("dieMaulwurfCompany_4_Spieler", dieMaulwurfCompany_4_Spieler);

// gameServer.register("Test", Test);

// gameServer.register("hindernisFliegen", hindernisFliegen);

app.use('/', express.static(path.join(__dirname, "static")));
app.use('/', serveIndex(path.join(__dirname, "static"), {'icons': true}))

// (optional) attach web monitoring panel
app.use('/colyseus', monitor(gameServer));

gameServer.onShutdown(function(){
  console.log(`game server is going down.`);
});

gameServer.listen(port);

// process.on("uncaughtException", (e) => {
//   console.log(e.stack);
//   process.exit(1);
// });

console.log(`Listening on http://localhost:${ port }`);
