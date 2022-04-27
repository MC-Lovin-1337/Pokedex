import Image from "next/image";
import Pokemon from "../public/pokemon.svg";
import SearchBar from "@components/SearchBar";
import { useState, useEffect } from "react";
import PokeCard from "@components/PokeCard";
import PokeFilter from "@components/PokeFilter";
import pokeColors from "@lib/pokeColors";
import { backgroundColor } from "tailwindcss/defaultTheme";
import hexToRgba from "hex-to-rgba";

export default function Home({ pokemon }) {
  const [search, setSearch] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState(pokemon);

  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    if ((!search && !selectedType) || !pokemonList) {
      setFilteredPokemon(null);
      return;
    }

    const typeFilteredPokemons = pokemonList.filter((p) =>{
      if (selectedType === "" || p.details.types.find((type) => type.type.name === selectedType)) {
        return true 
      }
      return false
  });

    const filteredPokemons = typeFilteredPokemons.filter((p) =>{
      if(p.name.toLowerCase().includes(search.toLowerCase())) {
        return true
      } 
      return false
  });

    setFilteredPokemon(filteredPokemons);
  }, [search, selectedType, pokemonList]);

  return (
    <div className="flex w-full flex-col items-center justify-center text-center overflow-x-hidden overflow-y-auto">
      <Image alt="Pokémon" src={Pokemon} height={60} />
      <h1 className="text-3xl font-bold mt-2">Pokédex </h1>
      <SearchBar
        className="w-full h-10 my-4 px-12"
        placeholder="Pokémon"
        onChange={setSearch}
        value={search}
      />


        <PokeFilter
        onChange={setSelectedType}
        options={Object.keys(pokeColors)}
        title="Type"
        defaultValue={""}
        value={selectedType}
      />
      <div className="flex flex-row flex-wrap -mx-2 capitalize w-full cursor-pointer">
        {(filteredPokemon || pokemonList).map((pokemon) => (
          <PokeCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  try {
    const pokeRes = await fetch(
      `${process.env.API_URL}/pokemon?offset=0&limit=471`
    );
    const pokemon = await pokeRes.json();
    const pokemonPromiseList = pokemon.results.map(async (p) => {
      const pokeDetailsRes = await fetch(p.url);
      const pokeDetails = await pokeDetailsRes.json();
      return {
        ...p,
        details: {
          image: pokeDetails.sprites.other["dream_world"]["front_default"],
          types: pokeDetails.types,
        },
      };
    });
    const pokemonList = await Promise.all(pokemonPromiseList);
    return {
      props: {
        pokemon: pokemonList,
        fetchNextUrl: pokemon.next,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        pokemon: [],
        next: null,
      },
    };
  }
}
