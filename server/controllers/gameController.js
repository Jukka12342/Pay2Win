import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
import path from 'path'
import {Game, Good, GoodInfo} from '../models/models.js'
import ApiError from '../error/ApiError.js';

class GameController {
    async create(req, res, next) {
        try {
            let { name } = req.body;
            const { img } = req.files;

            const __filename = fileURLToPath(import.meta.url);
            const dirname = path.dirname(__filename);

            let fileName = uuidv4() + '.jpg';

            await img.mv(path.resolve(dirname, '..', 'static', fileName));

            const game = await Game.create({ name, img: fileName });

            return res.json(game);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let games;

        games = await Game.findAndCountAll();

        return res.json(games)
    }

    async getOne(req, res) {
        const {id} = req.params;
        const game = await Game.findOne(
            {
                where: {id},
            },
        )
        return res.json(game)
    }
}


export default new GameController();
