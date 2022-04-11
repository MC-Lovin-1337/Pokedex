const fetchPokemon = async (res, req) => {
  const { API_URL } = process.env;
  const { offset, limit } = req.query;
  try {
    const pokeRes = await fetch(
      `${API_URL}/pokemon?offset=${offset || 0}&limit=${limit || 20}`
    );
    if (!pokeRes.ok) {
      throw new Error(pokeRes.statusText);
    }
    const pokemon = await pokeRes.json();
    return res.status(200).json(pokemon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default fetchPokemon;
