import { Router } from "express";
import { getComponentesTuberias,getComponenteTuberia,postComponenteTuberia,putComponenteTuberia,deleteComponenteTuberia } from "../controllers/componenteTuberias";


const router = Router();

router.get('/',getComponentesTuberias);
router.get('/:id',getComponenteTuberia);
router.post('/',postComponenteTuberia);
router.put('/:id',putComponenteTuberia);
router.delete('/:id',deleteComponenteTuberia);



export default router;