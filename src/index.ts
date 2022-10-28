import { app } from './configs/expressConfig';
import runApplication from './configs/runApplication';
import * as skins from './handlers/Skins';
runApplication(app);

app.get('/skins', skins.listSkinsHandler);
