import './Colaborador.css';
import Image from 'next/image';

interface ColaboradorProps {
    nome: string
    imagem: string
    comentario: string
    corDeFundo: string
    data: string
} 

const Colaborador = ({ nome, imagem, comentario, corDeFundo, data }: ColaboradorProps) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <Image src={imagem} alt={nome}/>            
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{comentario}</h5>
            <h5>{new Date(data).toLocaleDateString()}</h5>
        </div>
    </div>)
}

export default Colaborador