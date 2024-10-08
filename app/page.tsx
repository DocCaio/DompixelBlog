"use client";
import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Assunto from './componentes/Assunto';
import Rodape  from './componentes/Rodape';
import Banner from './componentes/Banner';
import { IColaborador } from './compartilhado/interfaces/IColaborador';

function Home() {

  const assuntos = [
    {
      nome: 'Esporte',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Ciência',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Política',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Tecnologia',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Religião',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Games',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Culinária',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner enderecoImagem='/imagens/banner.png'/>
      <Formulario assuntos={assuntos.map(assunto => assunto.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {assuntos.map(assunto => <Assunto
        key={assunto.nome} 
        nome={assunto.nome} 
        corPrimaria={assunto.corPrimaria} 
        corSecundaria={assunto.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.assunto === assunto.nome)}
      />)}   
       <Rodape />
    </div>
  );
}

export default Home;
