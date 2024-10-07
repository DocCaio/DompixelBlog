//import './Banner.css';
import Image from 'next/image';

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string    
}

const Banner = ({ enderecoImagem, textoAlternativo } :BannerProps) => {
    
    return (
        <header className="banner">
          
            <Image  src={enderecoImagem} alt={textoAlternativo}/>
        </header>
    )
}

export default Banner