import { useEffect, useState } from 'react';
import './css/App.css';

const mock = [ 
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/4",
    "https://rickandmortyapi.com/api/episode/5",
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/13",
    "https://rickandmortyapi.com/api/episode/14",
    "https://rickandmortyapi.com/api/episode/15",
    "https://rickandmortyapi.com/api/episode/16",
    "https://rickandmortyapi.com/api/episode/17",
    "https://rickandmortyapi.com/api/episode/18",
    "https://rickandmortyapi.com/api/episode/19",
    "https://rickandmortyapi.com/api/episode/20",
    "https://rickandmortyapi.com/api/episode/21",
    "https://rickandmortyapi.com/api/episode/22",
    "https://rickandmortyapi.com/api/episode/23",
    "https://rickandmortyapi.com/api/episode/24",
    "https://rickandmortyapi.com/api/episode/25",
    "https://rickandmortyapi.com/api/episode/26",
    "https://rickandmortyapi.com/api/episode/27",
    "https://rickandmortyapi.com/api/episode/28",
    "https://rickandmortyapi.com/api/episode/29",
    "https://rickandmortyapi.com/api/episode/30",
    "https://rickandmortyapi.com/api/episode/31",
    "https://rickandmortyapi.com/api/episode/32",
    "https://rickandmortyapi.com/api/episode/33",
    "https://rickandmortyapi.com/api/episode/34",
    "https://rickandmortyapi.com/api/episode/35",
    "https://rickandmortyapi.com/api/episode/36",
    "https://rickandmortyapi.com/api/episode/37",
    "https://rickandmortyapi.com/api/episode/38",
    "https://rickandmortyapi.com/api/episode/39",
    "https://rickandmortyapi.com/api/episode/40",
    "https://rickandmortyapi.com/api/episode/41",
    "https://rickandmortyapi.com/api/episode/42",
    "https://rickandmortyapi.com/api/episode/43",
    "https://rickandmortyapi.com/api/episode/44",
    "https://rickandmortyapi.com/api/episode/45",
    "https://rickandmortyapi.com/api/episode/46",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/50",
    "https://rickandmortyapi.com/api/episode/51"
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
  }
]

function App() {
  const [ conteudo, setConteudo ] = useState([<></>])
  const [ busca, setBusca ] = useState('');

  function traduzirStatus(status){
      switch(status){
        case 'Alive':
          return 'Vivo'
        case 'Dead':
          return 'Morto'
        case 'unknown':
          return 'Desconhecido'
        default:
          return status
    }
  }

  function traduzirEspecie(especie){
    switch(especie){
      case 'Human':
        return 'Humano'
      case 'Alien':
        return 'Alienígena'
      case 'Humanoid':
        return 'Humanoide'
      case 'Animal':
        return 'Animal'
      case 'Poopybutthole':
        return 'Poopybutthole'
      case 'Robot':
        return 'Robô'
      case 'Disease':
        return 'Doença'
      case 'Cronenberg':
        return 'Cronenberg'
      case 'unknown':
        return 'Desconhecido'
      default:
        return especie
    }
  }

  function traduzirGenero(genero){
    switch(genero){
      case 'Male':
        return 'Masculino'
      case 'Female':
        return 'Feminino'
      case 'Genderless':
        return 'Sem Gênero'
      case 'unknown':
        return 'Desconhecido'
      default:
        return genero
    }
  }

  async function carregarTodosOsPersonagens(){
    const retorno = await fetch(
      'https://rickandmortyapi.com/api/character'+busca,
      { method: 'GET' }
    )
    .then(response => response.json())
    console.log()
    return retorno.results
  }

  async function listaPersonagem(){
    const todosPersonagens = await carregarTodosOsPersonagens()
    
    return todosPersonagens.map(personagem =>
      <div className='card char'>
        <img src={personagem.image} alt={personagem.name} />
        <h2>{personagem.name}</h2>
        <div className='char-info'>
          <span className=''>
            <b>Espécie: </b>{traduzirEspecie(personagem.species)}
          </span>
          <span className=''>
            <b>Gênero: </b>{traduzirGenero(personagem.gender)}
          </span>
        </div>  

        <div>
          <div className='lista-secundaria'>
            <b>Participações:</b> 
            {personagem.episode.map(ep => (
              <span key={personagem.name+(ep.split('episode/')[1])}>
                Ep-{(ep.split('episode/')[1])}
              </span>
            ))}
          </div>
        </div>

        <h5>
          <span>
            <b>Status: </b>{traduzirStatus(personagem.status)}
          </span>
        </h5>
      </div>)
    }

    useEffect(() => {
      async function carregar(){
        setConteudo(await listaPersonagem()/*, listaEpisodio() */)
      }
      carregar()
  }, [busca])

 
  return (
    <div className="App">

      <header className="cabecalho">
        <h1>Rick And Morty API</h1>
      </header>
      <div className='filtros'>
        <span className='filtros-titulo'>Filtros</span>
        <div className='filtro'>
          <b>Status:</b>
          <span onClick={() => setBusca('?status=alive')}>Vivo</span>
          <span onClick={() => setBusca('?status=dead')}>Morto</span>
          <span onClick={() => setBusca('?status=unknown')}>Desconhecido</span>
        </div>
        <div className='filtro'>
          <b>Espécie:</b>
          <span onClick={() => setBusca('?species=human')}>Humano</span>
          <span onClick={() => setBusca('?species=alien')}>Alienígena</span>
          <span onClick={() => setBusca('?species=humanoid')}>Humanoide</span>
          <span onClick={() => setBusca('?species=animal')}>Animal</span>
          <span onClick={() => setBusca('?species=poopybutthole')}>Poopybutthole</span>
          <span onClick={() => setBusca('?species=cronenberg')}>Cronenberg</span>
          <span onClick={() => setBusca('?species=robot')}>Robô</span>
          <span onClick={() => setBusca('?species=disease')}>Doença</span>
          <span onClick={() => setBusca('?species=unknown')}>Desconhecido</span>
        </div>
        <div className='filtro'>
          <b>Gênero:</b>
          <span onClick={() => setBusca('?gender=male')}>Masculino</span>
          <span onClick={() => setBusca('?gender=female')}>Feminino</span>
          <span onClick={() => setBusca('?gender=genderless')}>Sem Gênero</span>
          <span onClick={() => setBusca('?gender=unknown')}>Desconhecido</span>
        </div>
      </div>

      <div className="lista-principal">
        { conteudo }
      </div>
    </div>
  );
}

export default App;