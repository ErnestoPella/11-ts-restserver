import { Router } from "express";
import { getPracticasCanal,getPracticaCanal,postPracticaCanal,putPracticaCanal,deletePracticaCanal } from '../controllers/practicaCanals';

const router = Router();

router.get('/',getPracticasCanal);
router.get('/:nombre',getPracticaCanal);
router.post('/',postPracticaCanal);
router.put('/:nombre',putPracticaCanal);
router.delete('/:nombre',deletePracticaCanal);


export default router;