import { Router } from "express";
import { getRoles,getRol,postRol,putRol,deleteRol } from "../controllers/roles";


const router = Router();

router.get('/',getRoles);
router.get('/:descripcion',getRol);
router.post('/',postRol);
router.put('/:descripcion',putRol);
router.delete('/:descripcion',deleteRol);

export default router;