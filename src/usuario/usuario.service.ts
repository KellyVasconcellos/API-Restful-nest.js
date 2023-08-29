import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { Repository } from "typeorm";
import { UsuarioRepository } from "./usuario.repository";

@Injectable()
export class UsuarioService {
    constructor (
        @InjectRepository(UsuarioEntity)
        private readonly UsuarioRepository: Repository<UsuarioEntity>
    ){}

    async listaUsuarios() {
        const usuariosSalvos = await this.UsuarioRepository.find();
        const usuariosLista = usuariosSalvos.map(
            (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome)
        )

        return usuariosLista;
    }
}