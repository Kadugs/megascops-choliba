import { Request, Response } from 'express';
import { listSkins } from '../../useCases/skinsUseCases';

export function listSkinsHandler(req: Request, res: Response) {
  const skins = listSkins();
}
