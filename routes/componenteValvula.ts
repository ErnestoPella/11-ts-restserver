import { Router } from "express";
import { getComponentesValvulas,getComponenteValvula,postComponenteValvula,putComponenteValvula,deleteComponenteValvula } from "../controllers/componenteValvulas";


const router = Router();

router.get('/',getComponentesValvulas);
router.get('/:id',getComponenteValvula);
router.post('/',postComponenteValvula);
router.put('/:id',putComponenteValvula);
router.delete('/:id',deleteComponenteValvula);


export default router;