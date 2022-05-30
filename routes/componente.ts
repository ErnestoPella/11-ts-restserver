import { Router } from "express";
import {getComponentes, getComponente,postComponente,putComponente,deleteComponente} from "../controllers/componentes";


const router = Router();

router.get('/',getComponentes);
router.get('/:id',getComponente);
router.post('/',postComponente);
router.put('/:id',putComponente);
router.delete('/:id',deleteComponente);


export default router;