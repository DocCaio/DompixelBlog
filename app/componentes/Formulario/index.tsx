'use client';
import { useState } from 'react';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    times: string[]
}

const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState('')
    const [comentario, setComentario] = useState('')
    const [imagem, setImagem] = useState('')
    const [assunto, setAssunto] = useState('')
    const [data, setData] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement> ) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            comentario,
            imagem,
            assunto,
            data
        })
        setNome('')
        setComentario('')
        setImagem('')
        setAssunto('')
    }

    return (
        <section className="formulario">
            <form onSubmit={evento => aoSalvar(evento)}>
                <h2>Preencha os dados corretamente para postar</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Comentário"
                    placeholder="Digite seu comentário" 
                    valor={comentario}
                    aoAlterado={valor => setComentario(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <CampoTexto
                    label='Data de entrada no assunto'
                    placeholder=''
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                    tipo="date"
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Assunto" 
                    itens={props.times}
                    valor={assunto}
                    aoAlterado={valor => setAssunto(valor)}
                />
                <Botao>
                    Publicar
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;