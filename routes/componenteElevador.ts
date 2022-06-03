import { Router } from "express";
import { getComponentesElevadores,getComponenteElevador,postComponenteElevador,putComponenteElevador,deleteComponenteElevador } from "../controllers/componenteElevadores";


const router = Router();

router.get('/',getComponentesElevadores);
router.get('/:id',getComponenteElevador);
router.post('/',postComponenteElevador);
router.put('/:id',postComponenteElevador);
router.delete('/:id',deleteComponenteElevador);


export default router;