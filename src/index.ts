import { app } from './configs/expressConfig';
import runApplication from './configs/runApplication';
import * as skins from './handlers/Skins';
import * as champions from './handlers/Champions';
runApplication(app);

app.get('/skins', skins.listSkinsHandler);
app.get('skins/:uid', skins.getSkinByUidHandler)
app.get('/champions', champions.listChampionsHandler);
app.get('/champions/:uid', champions.getChampionByUidHandler);
