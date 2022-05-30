import { Request, Response } from 'express';
import Practica from '../models/practica';

export const getPracticas = async (req: Request, res: Response) => {

    const practicas = await Practica.findAll();

    res.json(practicas);
}

export const getPractica = async (req:Request, res:Response) => {

    const { nombre } = req.params;

    try {
        const practica = await Practica.findByPk( nombre );
        res.json(practica);    
    } catch (error) {
        res.status(404).json({
            msg: `No existe una practica con ese nombre${nombre}`
        });
    }


}
export const postPractica = async (req:Request, res:Response) => {
    
    const {body} = req;

    try {
        const existepractica = await Practica.findOne({
            where: {
                nombre: body.nombre
            }
        });
        
        if(existepractica){
            return res.status(400).json({
                msg: `Ya existe una practica con ese nombre ${body.nombre}`
            });
        }

        const practica = new Practica(body);
        await practica.save();
        res.json(practica);    
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }

}
export const putPractica = async (req:Request, res:Response) => {
    const { nombre } = req.params;
    const {body} = req;

    try {
        const practica = await Practica.findOne({
            where: {
                nombre: nombre
            }
        });
        if(!practica){
            return res.status(404).json({
                msg: `La practica con el nombre ${nombre} no existe`
            });
        }

        await practica.update(body);
        res.json(practica);    
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }

}
export const deletePractica = async (req:Request, res:Response) => {
    const { nombre } = req.params;

    
    const practica = await Practica.findOne({
        where: {
            nombre: nombre
        }
    });
    if(!practica){
        return res.status(404).json({
            msg: `La practica con el nombre ${nombre} no existe`
        });
    }

    await practica.destroy();
    res.json({
        msg: `Practica ${nombre} eliminada`
    });    
   
}