import { Router } from "express";
import {getTrazas,getTraza,postTraza,putTraza,deleteTraza} from '../controllers/trazas';

const router = Router();

router.get('/',getTrazas);
router.get('/:id',getTraza);
router.post('/',postTraza);
router.put('/:id',putTraza);
router.delete('/:id',deleteTraza);

export default router;