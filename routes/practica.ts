import { Router } from "express";
import {getPracticas,getPractica,postPractica,putPractica,deletePractica} from "../controllers/practicas";

const router = Router();

router.get('/',getPracticas);
router.get('/:nombre',getPractica);
router.post('/',postPractica);
router.put('/:nombre',putPractica);
router.delete('/:nombre',deletePractica);


export default router;