import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";
import path from "path";
import { Game, Good, GoodInfo } from "../models/models.js";
import ApiError from "../error/ApiError.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class GameController {
    async create(req, res, next) {
        try {
            let { name } = req.body;
            if (!req.files || !req.files.img) {
                throw new Error("No file uploaded");
            }
            const { img } = req.files;
            let fileName = uuidv4() + ".jpg";
            img.mv(path.resolve(__dirname, "..", "static", fileName));
            const game = await Game.create({
                name,
                img: fileName,
            });

            return res.json(game);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        let games;

        games = await Game.findAndCountAll();

        return res.json(games);
    }

    async getCount(req, res) {
        try {
            const count = await Game.count();
            return res.json({ count });
        } catch (error) {
            console.error("Ошибка при подсчете количества игр:", error);
            return res.status(500).json({ error: "Ошибка сервера" });
        }
    }

    async getOne(req, res) {
        const { id } = req.params;
        const game = await Game.findOne({
            where: { id },
        });
        return res.json(game);
    }
}

export default new GameController();
