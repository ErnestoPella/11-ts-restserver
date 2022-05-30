import { Request, Response } from 'express';
import Componente from '../models/componente';

export const getComponentes = async (req: Request, res: Response) => {


    const componentes = await Componente.findAll();

    res.json(componentes);

}

export const getComponente = async (req:Request, res:Response) => {
    
    const {id} = req.params;

    try {
        const componente = await Componente.findByPk( id );
        res.json(componente);
    } catch (error) {
        res.status(404).json({
            msg: `No existe un componente con el id ${id}`
        });
    }
}

export const postComponente = async (req: Request, res: Response) => {

    const {body} = req;

    try {
        const componente = new Componente(body);
        await componente.save();
        res.json({
            msg: `Componente guardado`
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
}
export const putComponente =async (req: Request, res: Response) => {
    
    const {id} = req.params;
    const {body} = req;

    try {
        
        const componente = await Componente.findOne({
            where: {
                id: id
            }
        });
        if(!componente){
            return res.status(404).json({
                msg: `El componente con el id ${id} no existe`
            });
        }
        await componente.update(body);
        res.json({
            msg: `Componente actualizado`
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
    
}
export const deleteComponente =async (req: Request, res: Response) => {
    const {id} = req.params;

    const componente = await Componente.findOne({
        where: {
            id: id
        }
    });
    if(!componente){
        return res.status(404).json({
            msg: `El componente con el id ${id} no existe`
        });
    }

    await componente.destroy();
    res.json({
        msg: `Componente ${id} eliminado`
    })
}