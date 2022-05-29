import {Router} from "express";
import {getUsuario, getUsuarios, postUsuario, putUsuario,deleteUsuario } from "../controllers/usuarios";

const router = Router();

router.get('/',getUsuarios);
router.get('/:username',getUsuario);
router.post('/',postUsuario);
router.put('/:username',putUsuario);
router.delete('/:username',deleteUsuario);

export default router;