'use client';
import { useState } from 'react';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void
    assuntos: string[]
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
                <h2>Preencha os dados para comentar</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Comentario"
                    placeholder="Digite seu comentario" 
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
                    label='Data do comentário'
                    placeholder=''
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                    tipo="date"
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Assunto" 
                    itens={props.assuntos}
                    valor={assunto}
                    aoAlterado={valor => setAssunto(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;