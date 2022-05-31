import {Request,Response} from 'express';
import PracticaCanal from '../models/practicaCanal';

export const getPracticasCanal = async (req: Request, res: Response) => {

    const practicasCanal = await PracticaCanal.findAll();

    res.json(practicasCanal);
}

export const getPracticaCanal = async (req:Request, res:Response) => {

    const { nombre } = req.params;

    try {
        const practicaCanal = await PracticaCanal.findByPk( nombre );
        res.json(practicaCanal);    
    } catch (error) {
        res.status(404).json({
            msg: `No existe una practica con ese nombre${nombre}`
        });
    }


}
export const postPracticaCanal = async (req:Request, res:Response) => {
    
    const {body} = req;

    try {
        const existepracticaCanal = await PracticaCanal.findOne({
            where: {
                nombre: body.nombre
            }
        });
        
        if(existepracticaCanal){
            return res.status(400).json({
                msg: `Ya existe una practica con ese nombre ${body.nombre}`
            });
        }

        const practicaCanal = new PracticaCanal(body);
        await practicaCanal.save();
        res.json(practicaCanal);    
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }

}
export const putPracticaCanal = async (req:Request, res:Response) => {
    const { nombre } = req.params;
    const {body} = req;

    try {
        const practicaCanal = await PracticaCanal.findOne({
            where: {
                nombre: nombre
            }
        });
        if(!practicaCanal){
            return res.status(404).json({
                msg: `La practica con el nombre ${nombre} no existe`
            });
        }

        await practicaCanal.update(body);
        res.json(practicaCanal);    
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }

}
export const deletePracticaCanal = async (req:Request, res:Response) => {
    const { nombre } = req.params;

    
    const practicaCanal = await PracticaCanal.findOne({
        where: {
            nombre: nombre
        }
    });
    if(!practicaCanal){
        return res.status(404).json({
            msg: `La practica con el nombre ${nombre} no existe`
        });
    }

    await practicaCanal.destroy();
    res.json({
        msg: `Practica ${nombre} eliminada`
    });    
   
}