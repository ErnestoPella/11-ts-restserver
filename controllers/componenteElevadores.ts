import { Request, Response } from 'express';
import ComponenteElevador from '../models/componenteElevador';

export const getComponentesElevadores = async(req:Request,res:Response) => {

    const componentes = await ComponenteElevador.findAll();

    res.json(componentes);
}

export const getComponenteElevador = async(req:Request,res:Response) => {

    const {id} = req.params;
    try {
        const componentes = await ComponenteElevador.findOne({
            where:{
                id_componente:id
            }
        })

        res.json(componentes);
        
    } catch (error) {
        res.status(404).json({
            msg:`No existe un elevador con el id ${id}`
        });
    }
}

export const postComponenteElevador = async(req:Request,res:Response) => {

    const {body} = req;
    try {
        const existeElevador = await ComponenteElevador.findOne({
            where:{
                id_componente: body.id_componente
            }
        });
        if(existeElevador){
            return res.status(400).json({
                msg:`El elvedor ya existe`
            });
        }   
        const componenteElevador = new ComponenteElevador(body);
        await componenteElevador.save()
        res.json({
            msg:`Elevador agregado`
        }); 
    } catch (error) {
        res.status(500).json({
            msg:`Hable con el admin`
        })
        
    }
    
}

export const putComponenteElevador = async(req:Request,res:Response) => {

    const {id} = req.params;
    const {body} = req;

    try {
        const componenteElevador = await ComponenteElevador.findOne({
            where:{
                id_componente:id
            }
        });
        if(!componenteElevador){
            return res.status(400).json({
                msg:`No existe un elevador con el id ${id}`
            });
        }

        await componenteElevador.update(body);
        res.json({
            msg:`Elevador actualizado`
        });

    } catch (error) {
        res.status(500).json({
            msg: `Hable con el admin`
        })
    }
    const componentes = ComponenteElevador.findAll();

    res.json(componentes);
}

export const deleteComponenteElevador = async(req:Request,res:Response) => {

    const {id} = req.params;
    const componenteElevador = await ComponenteElevador.findOne({
        where:{
            id_componente:id
        }
    });
    if(!componenteElevador){
        return res.status(400).json({
            msg:`No existe el levador con el id ${id}`
        });
    }

    await componenteElevador.destroy();
    res.json({
        msg:`Elevador eliminado`
    });
}