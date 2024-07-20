import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PokemonCard } from '../card/PokemonCard';
import { Page } from '../../stories/Page';
import { Button } from '../../stories/Button';

const IndexPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [createPokemon, setCreatePokemon] = useState(false);
  const [updateList, setUpdateList] = useState(0);
  const [showDocumentation, setShowDocumentation] = useState(false);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const { data } = await axios.get('http://localhost:4000/');
        setPokemonList(data);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };
    // Fetch data initially and whenever updateList changes
    fetchPokemonList();
  }, [updateList]);

  const handleAddPokemon = () => {
    setCreatePokemon(true);
  };

  const handleShowDocumentation = () => {
    setShowDocumentation(true);
  };

  return (
    <main>
      {!showDocumentation ? (
        <>
        <h1>
          Coleção pessoal de POKÉMONS
        </h1>
          <Button 
          onClick={handleAddPokemon}
          size="small" 
          label="Adicionar Pokémon à sua coleção"
          />
          <Button 
          onClick={handleShowDocumentation}
          primary size="small" 
          label="Acesse a documentação"
          />
          {createPokemon && (
            <div className="create-card">
              <PokemonCard
                createPokemon={createPokemon}
                setCreatePokemon={setCreatePokemon}
                updateList={updateList}
                setUpdateList={setUpdateList}
              />
            </div>
          )}

          <div className="pokemon-container" style={{ display: 'flex', flexDirection: 'column' }}>
            {pokemonList.map(({ _id, name, imageUrl, evolution }) => (
              <PokemonCard
                key={_id}
                id={_id}
                name={name}
                image={imageUrl}
                evolution={evolution}
                updateList={updateList}
                setUpdateList={setUpdateList}
              />
            ))}
          </div>
        </>
      ) : (
        <Page />
      )}
    </main>
  );
};

export default IndexPage;
