import { Request, Response } from 'express';
import ComponenteMira from '../models/componenteMira';

export const getComponentesMiras = async (req:Request,res:Response) => {

    const componentes = await ComponenteMira.findAll();

    res.json(componentes);
}

export const getComponenteMira = async (req:Request,res:Response) => {

    const {id} = req.params;

    try {
        const componenteMira = await ComponenteMira.findOne({
            where:{
                id:id
            }
        });
        res.json(componenteMira);
    } catch (error) {
        res.status(404).json({
            msg: `No existe una mira con el id ${id}`
        });
    }
}

export const postComponenteMira = async (req:Request,res:Response) => {

    const {body} = req;

    try {
        const existeMira = await ComponenteMira.findOne({
            where:{
                id:body.id
            }
        });
        if(existeMira){
            return res.status(400).json({
                msg: `Ya existe una mira con el id ${body.id}`
            });
        }
        const componenteMira = new ComponenteMira(body);
        await componenteMira.save();

        res.json({
            msg: `Mira agregada`
        });
    } catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });   
    }
}

export const putComponenteMira = async (req:Request, res:Response) => {

    const {id} = req.params;
    const {body} = req;

    try {
        const componenteMira = await ComponenteMira.findOne({
            where:{
                id:id
            }
        });
        if(!componenteMira){
            return res.status(400).json({
                msg: `No existe una mira con el id ${id}`
            });
        }
        
        await componenteMira.update(body);

        res.json({
            msg: `Mira actualizada`
        });
    } catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        });   
    }
}

export const deleteComponenteMira = async (req:Request,res:Response) => {

    const {id} = req.params;

    const componenteMira = await ComponenteMira.findOne({
        where:{
            id:id
        }
    });
    if(!componenteMira){
        return res.status(400).json({
            msg: `No existe una mira con el id ${id}`
        });
    }
    
    await componenteMira.destroy();

    res.json({
        msg: `Mira eliminada`
    });

}