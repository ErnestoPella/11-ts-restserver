import { Request, Response } from 'express';
import ComponenteValvula from '../models/componenteValvula';

export const getComponentesValvulas = async (req:Request, res:Response) => {

    const componetes = await ComponenteValvula.findAll();

    res.json(componetes);
}

export const getComponenteValvula = async (req:Request, res:Response) => {

    const {id} = req.params;

    try {
        const componenteValvula = await ComponenteValvula.findOne({
            where:{
                id_componente:id
            }
        });
        res.json(componenteValvula);
    } catch (error) {
        res.status(404).json({
            msg: `No existe una valvula con el id ${id}`
        });
    }
}

export const postComponenteValvula = async (req:Request, res:Response) => {

    const{body} = req;

    try {
        const existeValvula = await ComponenteValvula.findOne({
            where:{
                id_componente: body.id_componente
            }
        });
        if(existeValvula){
            return res.status(400).json({
                msg: `Ya existe una valvula con el id ${body.id_componente}`
            });
        }
        const componenteValvula = new ComponenteValvula(body);
        await componenteValvula.save();
        res.json({
            msg:`Valvula agregada`
        });
    } catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });  
    }
}

export const putComponenteValvula = async (req:Request, res: Response) => {

    const {id} = req.params;
    const {body} = req;

    try {
        const componenteValvula = await ComponenteValvula.findOne({
            where:{
                id_componente:id
            }
        });
        if(!componenteValvula){
            return res.json({
                msg: `El componente con el ${id} no existe`
            });
        }
        await componenteValvula.update(body);
        res.json({
            msg: `Valvula actualizada`
        });
    } catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });  
    }
}

export const deleteComponenteValvula = async (req:Request,res:Response) => {
    
    const{id} = req.params;

    const componenteValvula = await ComponenteValvula.findOne({
        where:{
            id_componente:id
        }
    });
    if(!componenteValvula){
        return res.json({
            msg: `El componente con el ${id} no existe`
        });
    }

    await componenteValvula.destroy();
    res.json({
        msg: `Valvula eliminada`
    });

}