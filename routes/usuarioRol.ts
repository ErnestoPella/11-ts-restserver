import { Router } from "express";
import { getUsuarioRoles,getUsuarioRol,postUsuarioRol,putUsuarioRol,deleteUsuarioRol } from "../controllers/usuarioRoles";

const router = Router();

router.get('/',getUsuarioRoles);
router.get('/:username',getUsuarioRol);
router.post('/',postUsuarioRol);
router.put('/:username',putUsuarioRol);
router.delete('/:username',deleteUsuarioRol);

export default router;