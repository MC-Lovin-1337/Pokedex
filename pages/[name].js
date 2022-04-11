const Pokemon = ({ pokemon }) => {
  return <div>Hello {pokemon.name}</div>;
};

export default Pokemon;

export async function getStaticProps({ params }) {
  try {
    const pokeDetailsRes = await fetch(
      `${process.env.API_URL}/pokemon/${params.name}`
    );
    const pokeDetails = await pokeDetailsRes.json();
    const pokemon = {
      name: params.name,
      abilities: pokeDetails.abilities,
      height: pokeDetails.height,
      moves: pokeDetails.moves.slice(0, 5),
      stats: pokeDetails.stats,
      weight: pokeDetails.weight,
      image: pokeDetails.sprites.other["official-artwork"]["front_default"],
      types: pokeDetails.types,
    };
    return {
      props: {
        pokemon,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        pokemon: null,
      },
    };
  }
}

export async function getStaticPaths() {
  try {
    const pokeRes = await fetch(
      `${process.env.API_URL}/pokemon?offset=0&limit=45`
    );
    const pokemon = await pokeRes.json();

    const paths = pokemon.results.map((p) => ({
      params: { name: p.name },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    console.error(e);
    return {
      paths: [],
      fallback: false,
    };
  }
}
