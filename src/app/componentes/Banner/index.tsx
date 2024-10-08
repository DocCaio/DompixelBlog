import './Banner.css';
import img from './assets/banner.png';
import Image from 'next/image';


interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

const Banner = () => {
   
    return (
        <header className="banner">            
            <Image alt='banner' src={img}/>
        </header>
    )
}

export default Banner