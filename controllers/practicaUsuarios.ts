import {Request, Response} from 'express';
import PracticaUsuario from '../models/practicaUsuario';



export const getPracticaUsuarios = async (req:Request,res:Response) =>{

    const practicaUsuarios = await PracticaUsuario.findAll();

    res.json(practicaUsuarios);
}

export const getPracticaUsuario = async (req:Request,res:Response) => {

    const {username} = req.params;

    try {
        const practicaUsuario = await PracticaUsuario.findOne({
            where:{
                username:username
            }
        });
        res.json(practicaUsuario)
    } catch (error) {
        res.status(404).json({
            msg: `No existe una relacion con ese username${username}`
        });
    }
} 

export const postPracticaUsuario = async (req:Request,res:Response) =>{

    const {body} = req;

    try {
        const existePracticaUsuario = await PracticaUsuario.findOne({
            where:{
                id_practica: body.id_practica,
                username: body.username
            }
        });

        if (existePracticaUsuario) {
            return res.status(400).json({
                msg:`Ya existe la relacion`
            });
        }

        const practicaUsuario = new PracticaUsuario(body);
        await practicaUsuario.save();
        res.json(practicaUsuario);
    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
}

export const putPracticaUsuario = async (req:Request,res:Response) => {

    const {username} = req.params;
    const {body} = req;

    try {
        const practicaUsuario = await PracticaUsuario.findOne({
            where:{
                username: username
            }
        });

        if(!practicaUsuario){
            return res.status(404).json({
                msg: `No existe el usuario ${username}`
            });
        }

        await practicaUsuario.update(body);
        res.json(practicaUsuario);

    } catch (error) {
         res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
}

export const deletePracticaUsuario = async (req:Request,res:Response) => {

    const {body} = req;
    
    const practicaUsuario = await PracticaUsuario.findOne({
        where:{
            id_practica: body.id_practica,
            username: body.username
        }
    });

    if(!practicaUsuario){
        return res.status(404).json({
            msg:`No existe la relacion ${username}`
        });
    }

    await practicaUsuario.destroy();
    res.json({
        msg:`Relacion eliminada`
    });
}