import {Router} from "express";
import { getPracticaUsuarios,getPracticaUsuario,postPracticaUsuario,putPracticaUsuario,deletePracticaUsuario } from "../controllers/practicaUsuarios";

const router = Router();

router.get('/',getPracticaUsuarios);
router.get('/:username',getPracticaUsuario);
router.post('/',postPracticaUsuario);
router.put('/:username',putPracticaUsuario);
router.delete('/',deletePracticaUsuario);

export default router;