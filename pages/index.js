import Image from "next/image";
import Pokemon from "../public/pokemon.svg";
import SearchBar from "@components/SearchBar";
import { useState, useEffect } from "react";
import PokeCard from "@components/PokeCard";
import PokeFilter from "@components/PokeFilter";
import pokeColors from "@lib/pokeColors";

export default function Home({ pokemon }) {
  const [search, setSearch] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState(pokemon);
  // const [selectedType, setSelectedType] = useState("");
  useEffect(() => {
    if (!search || !pokemonList) {
      setFilteredPokemon(null);
      return;
    }

    const filteredPokemons = pokemonList.filter((p) =>
      p.name.toLowerCase().includes(search)
    );
    setFilteredPokemon(filteredPokemons);
  }, [search, pokemonList]);

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
      {/* <PokeFilter
        onChange={setSelectedType}
        options={Object.keys(pokeColors)}
        title="Type"
        defaultValue={""}
      /> */}
      <div className="flex flex-row flex-wrap -mx-2 capitalize w-full">
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
      `${process.env.API_URL}/pokemon?offset=0&limit=150`
    );
    const pokemon = await pokeRes.json();
    const pokemonPromiseList = pokemon.results.map(async (p) => {
      const pokeDetailsRes = await fetch(p.url);
      const pokeDetails = await pokeDetailsRes.json();
      return {
        ...p,
        details: {
          image: pokeDetails.sprites.other["official-artwork"]["front_default"],
          types: pokeDetails.types,
        },
      };
    });
    const pokemonList = await Promise.all(pokemonPromiseList);
    console.log(pokemonList);
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
