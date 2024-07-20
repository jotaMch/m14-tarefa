import axios from 'axios'
import React, { useState } from 'react'
import Erro from "../../error/404"
import { Button } from '../../stories/Button'

export const PokemonCard = ({
  id,
  name,
  image,
  evolution,
  createPokemon,
  setCreatePokemon,
  updateList,
  setUpdateList
}) => {
  const [editPokemon, setEditPokemon] = useState(true)
  const [nameInput, setNameInput] = useState(name ?? '')
  const [imageUrlInput, setImageUrlInput] = useState(image ?? '')
  const [evolutionInput, setEvolutionInput] = useState(
    evolution?.toString() ?? ''
  )

  const handleChangePokemon = () => {
    console.log(editPokemon)
    setEditPokemon(false)

    // Comentando o code solicitado que faz solicitação a API local

    /* if (createPokemon) {
      axios.post('http://localhost:4000/new-pokemon', {
        name: nameInput,
        imageUrl: imageUrlInput,
        evolution: Number(evolutionInput)
      })
      setCreatePokemon(false)
    } else {
      axios.put(`http://localhost:4000/update-pokemon/${id}`, {
        name: nameInput,
        imageUrl: imageUrlInput,
        evolution: Number(evolutionInput)
      })
      setEditPokemon(false)
    }
    setUpdateList(updateList + 1) */
  }

  const handleDeletePokemon = () => {
    axios.delete(`http://localhost:4000/delete-pokemon/${id}`)
    setUpdateList(updateList + 1)
  }

  return (
    <div className="pokemon-card">
      {editPokemon ? (
        <form>
          <label>
            Nome:
            <input
              type="text"
              onChange={e => setNameInput(e.target.value)}
              value={nameInput}
            />
          </label>
          <label>
            Url da imagem:
            <input
              type="text"
              onChange={e => setImageUrlInput(e.target.value)}
              value={imageUrlInput}
            />
          </label>
          <label>
            Estágio de evolução:
            <input
              type="number"
              onChange={e => setEvolutionInput(e.target.value)}
              value={evolutionInput}
            />
          </label>
          <div className='center'>
            <Button 
            secondary size="small" 
            label="Cancela"
            onClick={() =>
              createPokemon ? setCreatePokemon(false) : setEditPokemon(false)
            }
            />
            <Button 
            primary size="small" 
            label="Confirma"
            onClick={handleChangePokemon}
            />
          </div>
        </form>
      ) : 
      <Erro/>

      // Comentando esse retorno negativo do estado editPokemon
      // Motivo: As proximas funções requerem uma API, de acordo com o
      // codigo disponibilizado, senddo assim retornarei o erro em 
      // components/error

        /*  <>
          <h2>{name}</h2>
          <img src={image} alt={name} />
          <h3>Estágio de evolução: {evolution}</h3>
          <button onClick={() => setEditPokemon(true)}>Alterar</button>
          <button onClick={handleDeletePokemon}>Remover</button>
        </> */
      }
    </div>
  )
}
