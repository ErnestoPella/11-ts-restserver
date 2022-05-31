import { Request,Response } from 'express';
import TrazaPractica from '../models/trazaPractica';

export const getTrazasPracticas = async (req:Request,res:Response) => {

    const trazasPracticas = await TrazaPractica.findAll();

    res.json(trazasPracticas);
}

export const getTrazaPractica = async (req:Request,res:Response) => {

    const {id} = req.params;

    try {
        const trazaPractica = await TrazaPractica.findOne({
            where:{
                id: id
            }
        });
        res.json(trazaPractica);    
    } catch (error) {
        res.status(404).json({
            msg: `No se encontro ninguna traza con el id ${id}`
        });
    }
    
}

export const postTrazaPractica = async (req:Request,res:Response) => {

    const {body} = req;

    try {
        const existetrazaPractica = await TrazaPractica.findOne({
            where:{
                id: body.id
            }
        });

        if (existetrazaPractica) {
            return res.status(400).json({
                msg: `Ya existe una traza con el id ${body.id}`
            });
        } 
        const trazaPractica = new TrazaPractica(body);
        await trazaPractica.save();
        res.json(trazaPractica);  
    } catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
}

export const putTrazaPractica = async (req:Request,res:Response) => {

    const {id} = req.params;
    const {body} = req;

    try {
        const trazaPractica =  await TrazaPractica.findOne({
            where: {
                id: id
            }
        });

        if ( !trazaPractica ) {
            return res.status(404).json({
                msg: `No existe una traza con el id ${id}`
            });
        }

        await trazaPractica.update(body);
        res.json(trazaPractica);    
    } catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });
    }
}

export const deleteTrazaPractica = async (req:Request,res:Response) => {

    const {id} = req.params;
   
    const trazaPractica =  await TrazaPractica.findOne({
        where:{
            id: id
        }
    });

    if ( !trazaPractica ) {
        return res.status(404).json({
            msg: `No existe una traza con el id ${id}`
        });
    }

    await trazaPractica.destroy();
    res.json(trazaPractica);    

    res.status(500).json({
        msg: `Traza eliminada`
    });
}
