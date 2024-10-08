import './Banner.css';
import Ban from './assets/banner.png';
import Image from 'next/image';

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

const Banner = ({ } :BannerProps) => {
    // JSX
    return (
        <header className="banner">
             <Image src={Ban} alt="O banner principal da página"/>             
        </header>
    )
}

export default Banner