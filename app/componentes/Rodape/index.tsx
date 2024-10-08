import './rodape.css';
import Image from 'next/image';
import Logo from './assets/logo.png';

const Rodape = () => {
    return (<footer className="footer">       
       <section>

       <Image className='img' src={Logo} alt="Logo"/>  
       
       </section>
       <section>
        <p>
            Blog de comentários.
        </p>
       </section>
    </footer>)
}

export default Rodape;