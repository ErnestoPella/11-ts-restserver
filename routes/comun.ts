import {Router} from "express";
import { getComunes,getComun,postComun,putComun,deleteComun } from "../controllers/comun";
import { putComponente } from '../controllers/componentes';


const router = Router();

router.get('/',getComunes);
router.get('/:id_componente',getComun);
router.post('/',postComun);
router.put(':id_componente',putComponente);
router.delete('/:id_componente',deleteComun);

export default router;