import { Router } from "express";
import { getTrazasPracticas,getTrazaPractica,postTrazaPractica,putTrazaPractica,deleteTrazaPractica } from "../controllers/trazaPracticas";

const router = Router();

router.get('/',getTrazasPracticas);
router.get('/:id',getTrazaPractica);
router.post('/',postTrazaPractica);
router.put('/:id',putTrazaPractica);
router.delete('/:id',deleteTrazaPractica);


export default router;