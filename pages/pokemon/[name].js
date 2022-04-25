import hexToRgba from "hex-to-rgba";
import Image from "next/image";
import pokeColors from "@lib/pokeColors";
import styles from "../../styles/Home.module.css";

/* const Pokemon = ({ pokemon }) => {
  return ( <div style={{
    background: hexToRgba(
    pokeColors[pokemon.types[0].type.name || "normal"], 
    0.28
    ),
  }}> */

const Pokemon = ({ pokemon }) => {
  return (
    <div
      style={{
        background: `linear-gradient(45deg,
        ${hexToRgba(
          pokeColors[pokemon.types[0].type.name || "normal"],
          1.0
        )} , ${hexToRgba(
          pokeColors[pokemon.types[0].type.name || "normal"],
          0.1
        )}
      
      )`,
      }}
    >
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.header}></h1>
        </header>

        <aside className={`${styles.aside} ${styles.links}`}>
          <div className={styles.hidden}>
            #{pokemon.order.toString().padStart(3, 0)}
          </div>
          {/* <div className={styles.pokeTooltip}>#{pokemon.order.toString().padStart(3,0)}
  <div className={styles.tooltipText}>Das hier ist ein Beispieltext der nur angezeigt wird, wenn man über die id hovered.</div> 
</div>*/}

          {/* <div className={styles.bild}> */}
          <div className={styles.bild}>
            <div id="poke">
              <Image
                src={pokemon.image1}
                alt={pokemon.name}
                height={500}
                width={500}
              ></Image>
            </div>
          </div>
        </aside>

        <aside className={`${styles.aside} ${styles.rechts}`}>
          <div className={`${styles.aside} ${styles.rechtsoben}`}>
            <div className={styles.pokenamecontainer}>
              <div
                className={styles.pokenummer}
                style={{
                  color: hexToRgba(
                    pokeColors[pokemon.types[0].type.name || "normal"],
                    0.3
                  ),
                }}
              >
                #{pokemon.order.toString().padStart(3, 0)}{" "}
              </div>

              <div
                style={{
                  color: hexToRgba(
                    pokeColors[pokemon.types[0].type.name || "normal"],
                    1.0
                  ),
                }}
                className={`${styles.pokemonart}`}
              >
                {pokemon.species.genera[7].genus}
              </div>

              <div
                style={{
                  color: hexToRgba(
                    pokeColors[pokemon.types[0].type.name || "normal"],
                    1.0
                  ),
                }}
                className={`${styles.pokename} ${styles.textshadow}`}
              >
                {pokemon.name}
              </div>
            </div>
          </div>

          <div className={`${styles.aside} ${styles.rechtsmitte}`}>
            <div typcontainer>
              <div className={styles.poketyp}>
                <div className={styles.typeContainer}>
                  {pokemon.types.map(({ type }) => (
                    <span
                      style={{
                        backgroundColor: hexToRgba(
                          pokeColors[type.name || "normal"],
                          1.0
                        ),
                      }}
                      className={styles.button}
                      key={type.name}
                    >
                      {type.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                color: hexToRgba(
                  pokeColors[pokemon.types[0].type.name || "normal"],
                  1.0
                ),
              }}
              className={styles.flavortext}
            >
              height {pokemon.height / 10} meter
            </div>
            <div
              style={{
                color: hexToRgba(
                  pokeColors[pokemon.types[0].type.name || "normal"],
                  1.0
                ),
              }}
              className={styles.flavortext}
            >
              Weight {pokemon.weight / 10} kilograms
            </div>
          </div>

          <div className={`${styles.aside} ${styles.rechtsunten}`}>
            <div className={styles.stats}>
              <ol>
                {pokemon.stats.map(({ stat, base_stat }) => (
                  <li key={stat.name}>
                    {stat.name.replace("-", " ")} {"-"} {base_stat}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div
            style={{
              color: hexToRgba(
                pokeColors[pokemon.types[0].type.name || "normal"],
                1.0
              ),
            }}
            className={styles.flavortext}
          >
            {pokemon.species.flavor_text_entries[0].flavor_text.replace(
              "",
              " "
            )}
          </div>
        </aside>

        <div className={styles.namejapan}>
          <h1
            style={{
              color: hexToRgba(
                pokeColors[pokemon.types[0].type.name || "normal"],
                1.0
              ),
            }}
          >
            {pokemon.species.names[0].name}
          </h1>
        </div>

        <footer className={styles.footer}>
          <aside className={`${styles.aside} ${styles.footerlinks}`}>
            <div className={styles.footerueber}>abilities</div>

            {pokemon.abilities.map((ability) => (
              <div key={ability.name} className={styles.pokeTooltip}>
                <ol>{ability.name.replace("-", " ")} </ol>

                <div className={styles.abilityDetails}>
                  <ol>{ability.flavorText} </ol>
                </div>
              </div>
            ))}
          </aside>

          <aside className={`${styles.aside} ${styles.footermitte}`}>
            <div className={styles.footerueber}>moves</div>
            {pokemon.moves.map((move) => (
              <div key={move.name} className={styles.pokeTooltip}>
                <ol>{move.name.replace("-", " ")} </ol>

                <div className={styles.moveDetails}>
                  <ol>{move.flavorText} </ol>
                </div>
              </div>
            ))}
          </aside>

          <aside className={`${styles.aside} ${styles.footerrechts}`}>
            <div className={styles.footerueber}>Family</div>
            <div className={styles.footertext}>
              <div>
                {pokemon.evolutionImages[0] && (
                  <Image
                    src={pokemon.evolutionImages[0]}
                    alt={pokemon.name}
                    height={125}
                    width={125}
                  ></Image>
                )}
                {pokemon.evolutionImages[1] && (
                  <Image
                    src={pokemon.evolutionImages[1]}
                    alt={pokemon.name}
                    height={125}
                    width={125}
                  ></Image>
                )}
                {pokemon.evolutionImages[2] && (
                  <Image
                    src={pokemon.evolutionImages[2]}
                    alt={pokemon.name}
                    height={125}
                    width={125}
                  ></Image>
                )}
              </div>

              {pokemon.evolution.chain.species.name}
              {pokemon.evolution.chain.evolves_to[0].species.name}
              {pokemon.evolution.chain.evolves_to[0].evolves_to[0].species.name}
            </div>
          </aside>
        </footer>
      </div>
    </div>
  );
};

//--------------------------------------------------------------------------------------

async function getEvolution(images, chain) {
  const evolutionsRes = await fetch(
    `${process.env.API_URL}/pokemon/${chain.species.name}`
  );
  const evolutionsDetails = await evolutionsRes.json();

  images.push(evolutionsDetails.sprites.other["dream_world"]["front_default"]);
  if (chain.evolves_to.length > 0) {
    return getEvolution(images, chain.evolves_to[0]);
  } else {
    return images;
  }
}

//--------------------------------------------------------------------------------------

export async function getStaticProps({ params }) {
  try {
    const pokeDetailsRes = await fetch(
      `${process.env.API_URL}/pokemon/${params.name}`
    );
    const pokeDetails = await pokeDetailsRes.json();

    //--------------------------------------------------------------------------------------

    const specieRes = await fetch(pokeDetails.species.url);
    const species = await specieRes.json();

    //--------------------------------------------------------------------------------------

    const evolutionRes = await fetch(species.evolution_chain.url);
    const evolution = await evolutionRes.json();
    const evolutionImages = await getEvolution([], evolution.chain);

    //--------------------------------------------------------------------------------------

    const abilitiesPromises = pokeDetails.abilities.map(async ({ ability }) => {
      const abilityRes = await fetch(ability.url);
      const abilityDetails = await abilityRes.json();
      return {
        ...abilityDetails,
        flavorText: abilityDetails.flavor_text_entries[0].flavor_text,
      };
    });
    const abilities = await Promise.all(abilitiesPromises);

    //--------------------------------------------------------------------------------------

    const movesPromises = pokeDetails.moves
      .slice(0, 4)
      .map(async ({ move }) => {
        const moveRes = await fetch(move.url);
        const moveDetails = await moveRes.json();
        return {
          ...moveDetails,
          flavorText: moveDetails.flavor_text_entries[0].flavor_text,
        };
      });
    const moves = await Promise.all(movesPromises);

    //--------------------------------------------------------------------------------------

    const pokemon = {
      name: params.name,
      abilities: abilities,
      height: pokeDetails.height,
      moves: moves,
      stats: pokeDetails.stats,
      weight: pokeDetails.weight,
      image1: pokeDetails.sprites.other["dream_world"]["front_default"],
      image: pokeDetails.sprites.other["official-artwork"]["front_default"],
      types: pokeDetails.types,
      order: pokeDetails.order,
      species: species,
      evolution: evolution,
      evolutionImages: evolutionImages,
    };
    /* console.log(pokemon); */
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
      `${process.env.API_URL}/pokemon?offset=0&limit=151`
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
export default Pokemon;
