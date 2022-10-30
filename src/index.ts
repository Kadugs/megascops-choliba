import { app } from './configs/expressConfig';
import runApplication from './configs/runApplication';
import * as skins from './handlers/Skins';
import * as champions from './handlers/Champions';
import * as players from './handlers/Players';

runApplication(app);

app.post('/skins', skins.createSkinHandler);
app.get('/skins', skins.listSkinsHandler);
app.get('/skins/:uid', skins.getSkinByUidHandler)
app.get('/champions', champions.listChampionsHandler);
app.get('/champions/:uid', champions.getChampionByUidHandler);
app.post('/champions', champions.createChampionHandler);
app.get('/player', players.listPlayersHandler);
app.get('/player/:uid', players.getPlayerByUidHandler);
app.post('/player', players.createPlayerHandler);