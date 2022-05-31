import { Router } from "express";
import { getPracticasBancoPieazometrico,getPracticaBancoPieazometrico,postPracticaBancoPieazometrico,putPracticaBancoPieazometrico,deletePracticaBancoPieazometrico} from "../controllers/practicaBancoPiezometricos";

const router = Router();

router.get('/',getPracticasBancoPieazometrico);
router.get('/:nombre',getPracticaBancoPieazometrico);
router.post('/',postPracticaBancoPieazometrico);
router.put('/:nombre',putPracticaBancoPieazometrico);
router.delete('/:nombre',deletePracticaBancoPieazometrico);


export default router;