import { Request, Response } from 'express';
import ComponenteTuberia from '../models/componenteTuberia';

export const getComponentesTuberias = async (req:Request,res:Response) => {

    const componentes = await ComponenteTuberia.findAll();
    
    res.json(componentes);

}

export const getComponenteTuberia = async (req:Request,res:Response) => {

    const {id} = req.params;

    try {
        const componenteTuberia = await ComponenteTuberia.findOne({
            where:{
                id: id
            }
        });
        res.json(componenteTuberia);
    } catch (error) {
        res.status(404).json({
            msg: `No existe un componente con el id ${id}`
        });
        
    }   
}

export const postComponenteTuberia = async (req:Request, res:Response) => {

    const {body} = req;

    try {
        const existeComponenteTuberia = await ComponenteTuberia.findOne({
            where:{
                id: body.id
            }
        });
        
        if(existeComponenteTuberia){
            return res.status(400).json({
                msg: `Ya existe una tuberia con el id ${body.id}`
            });
        }
        
        const componenteTuberia = new ComponenteTuberia(body);
        await componenteTuberia.save();
        res.json({
            msg: `Tuberia agregada`
        });
    } catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });       
    }
}

export const putComponenteTuberia = async (req:Request,res:Response) => {
    
    const {id} = req.params;
    const {body} = req;

    try {
        const componenteTuberia = await ComponenteTuberia.findOne({
            where:{
                id:id
            }
        });
        if(!componenteTuberia){
            return res.json({
                msg: `El componente con el ${id} no existe`
            });
        }

        await componenteTuberia.update(body);
        res.json({
            msg: `Tuberia actualizada`
        });

    } catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });       
    }
}


export const deleteComponenteTuberia = async (req: Request, res:Response) => {

    const {id} = req.params;

    const componenteTuberia = await ComponenteTuberia.findOne({
        where:{
            id:id
        }
    });
    if(!componenteTuberia){
        return res.status(404).json({
            msg:`La tuberia con el id ${id} no existe`
        });
    }

    await componenteTuberia.destroy();
    res.json({
        msg: `Tuberia ${id} eliminada`
    });
}