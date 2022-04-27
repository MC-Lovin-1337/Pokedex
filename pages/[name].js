import hexToRgba from "hex-to-rgba";
import Image from "next/image";
import pokeColors from "@lib/pokeColors";
import Home from "pages";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Pokemon = ({ pokemon }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading ...</p>;
  }
  return (
    <div
      className="p-6 min-h-screen"
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
      <div className="flex text-center flex-row flex-wrap">
        <header>
          <button onClick={() => router.back()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </button>
        </header>
        <aside className="flex flex-col justify-center items-center md:grow md:shrink md:basis-0">
          <div
            className="flex absolute inset-0 ml-[100px] w-fit h-fit font-bold text-[100px] sm:hidden"
            style={{
              color: hexToRgba(
                pokeColors[pokemon.types[0].type.name || "normal"],
                0.3
              ),
            }}
          >
            #{pokemon.id.toString().padStart(3, 0)}{" "}
          </div>
          <div
            className="flex text-left text-xs sm:hidden w-full pl-10 -mt-8 mb-8"
            style={{
              color: hexToRgba(
                pokeColors[pokemon.types[0].type.name || "normal"],
                1.0
              ),
            }}
          >
            {pokemon.species.genera[7].genus}
          </div>

          <div
            className="flex text-left relative ml-5 text-[50px] bottom-5 sm:hidden"
            style={{
              color: hexToRgba(
                pokeColors[pokemon.types[0].type.name || "normal"],
                1.0
              ),
            }}
          >
            {pokemon.name
              .replace("nidoran-m", "nidoran")
              .replace("nidoran-f", "nidoran")}
          </div>
          <div className="flex relative">
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

        <aside className="flex flex-col md:grow md:shrink md:basis-0 w-full">
          <div className="flex ">
            <div className="relative">
              <div
                className="hidden sm:flex absolute inset-0 ml-[100px] w-fit h-fit font-bold text-[100px]"
                style={{
                  color: hexToRgba(
                    pokeColors[pokemon.types[0].type.name || "normal"],
                    0.3
                  ),
                }}
              >
                #{pokemon.id.toString().padStart(3, 0)}{" "}
              </div>

              <div
                className="hidden sm:flex text-left text-xs"
                style={{
                  color: hexToRgba(
                    pokeColors[pokemon.types[0].type.name || "normal"],
                    1.0
                  ),
                }}
              >
                {pokemon.species.genera[7].genus}
              </div>
              <div className={`${styles.textshadow}`}>
                <div
                  className="hidden sm:flex text-left relative ml-5 text-[50px] bottom-5"
                  style={{
                    color: hexToRgba(
                      pokeColors[pokemon.types[0].type.name || "normal"],
                      1.0
                    ),
                  }}
                >
                  {pokemon.name
                    .replace("nidoran-m", "nidoran")
                    .replace("nidoran-f", "nidoran")}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex relative">
              <div className="flex relative text-center ml-5">
                <div className="flex mb-4 mt-5">
                  {pokemon.types.map(({ type }) => (
                    <span
                      className="font-normal p-0.5 h-[30px] w-[70px] rounded-[5px] text-white"
                      style={{
                        backgroundColor: hexToRgba(
                          pokeColors[type.name || "normal"],
                          1.0
                        ),
                      }}
                      key={type.name}
                    >
                      {type.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="flex text-left text-xs ml-5"
              style={{
                color: hexToRgba(
                  pokeColors[pokemon.types[0].type.name || "normal"],
                  1.0
                ),
              }}
            >
              height {pokemon.height / 10} meter
            </div>

            <div
              className="flex text-left text-xs ml-5"
              style={{
                color: hexToRgba(
                  pokeColors[pokemon.types[0].type.name || "normal"],
                  1.0
                ),
              }}
            >
              Weight {pokemon.weight / 10} kilograms
            </div>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex text-left relative ml-5 pt-[1em] bottom-2.5 w-full">
              <ol className="w-full md:mr-10 lg:mr-80">
                {pokemon.stats.map(({ stat, base_stat }) => (
                  <li
                    className="flex justify-between items-center"
                    key={stat.name}
                  >
                    <div className="whitespace-nowrap">
                      {stat.name.replace("-", " ")}
                    </div>
                    <div className="h-4 relative w-40 sm:w-96 max-w-xl rounded-full overflow-hidden">
                      <div
                        className="w-full h-full absolute"
                        style={{
                          backgroundColor: hexToRgba(
                            pokeColors[pokemon.types[0].type.name || "normal"],
                            0.2
                          ),
                        }}
                      ></div>
                      <div
                        id="bar"
                        className={`h-full bg-${
                          pokemon.types[0].type.name || "normal"
                        } relative text-sm text-right leading-4`}
                        style={{ width: `${(base_stat / 200) * 100}%` }}
                      >
                        {base_stat}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div
            className="flex text-left text-xs ml-5"
            style={{
              color: hexToRgba(
                pokeColors[pokemon.types[0].type.name || "normal"],
                1.0
              ),
            }}
          >
            {pokemon.species.flavor_text_entries
              .find((e) => e.language.name === "en")
              ?.flavor_text.replace("", " ")}
          </div>
        </aside>

        <div className="w-full text-center relative mt-4 text-6xl md:text-[100px] lg:text-[150px]">
          <h1
            className={styles.namejapan}
            style={{
              color: hexToRgba(
                pokeColors[pokemon.types[0].type.name || "normal"],
                1.0
              ),
            }}
          >
            {pokemon.species.names.find((e) => e.language.name === "ja")?.name}
          </h1>
        </div>

        <footer className="flex md:grow md:shrink md:basis-full flex-col justify-around md:flex-col lg:flex-row w-full">
          <aside className="flex flex-col items-center">
            <div className="flex relative text-2xl mt-10 mb-5">abilities</div>

            {pokemon.abilities.map((ability) => (
              <div key={ability.name} className={styles.pokeTooltip}>
                <ol className="cursor-pointer">
                  {ability.name.replace("-", " ")}{" "}
                </ol>

                <div
                  className={`bg-${pokemon.types[0].type.name || "normal"} ${
                    styles.pokeTooltipDetails
                  }`}
                >
                  <ol>{ability.flavorText} </ol>
                </div>
              </div>
            ))}
          </aside>

          <aside className="flex flex-col items-center">
            <div className="flex relative text-2xl mt-10 mb-5">moves</div>
            {pokemon.moves.map((move) => (
              <div key={move.name} className={styles.pokeTooltip}>
                <ol className="cursor-pointer">
                  {move.name.replace("-", " ")}{" "}
                </ol>

                <div
                  className={`bg-${pokemon.types[0].type.name || "normal"} ${
                    styles.pokeTooltipDetails
                  }`}
                >
                  <ol>{move.flavorText} </ol>
                </div>
              </div>
            ))}
          </aside>

          <aside className="flex flex-col items-center">
            <div className="relative text-2xl mt-10 mb-5">evolutions</div>
            <div className="flex flex-row w-screen lg:w-auto justify-around flex-wrap max-w-md">
              {pokemon.evolutions.map((evolution) => (
                <div key={evolution.name} className={styles.pokeTooltip}>
                  <a href={`/${evolution.name}`}>
                    {evolution.sprites.other["dream_world"][
                      "front_default"
                    ] && (
                      <Image
                        src={
                          evolution.sprites.other["dream_world"][
                            "front_default"
                          ]
                        }
                        alt={evolution.name}
                        height={125}
                        width={125}
                      ></Image>
                    )}
                  </a>
                  <div
                    className={`bg-${pokemon.types[0].type.name || "normal"} ${
                      styles.pokeEvoDetails
                    }`}
                  >
                    <p>
                      {evolution.name
                        .replace("nidoran-m", "nidoran")
                        .replace("nidoran-f", "nidoran")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </footer>
      </div>
    </div>
  );
};

//--------------------------------------------------------------------------------------

async function getEvolutions(evolutions, chain) {
  const evolutionsRes = await fetch(
    `${process.env.API_URL}/pokemon/${chain.species.name}`
  );
  const evolutionsDetails = await evolutionsRes.json();

  evolutions.push(evolutionsDetails);

  chain.evolves_to.forEach((element) => {
    getEvolutions(evolutions, element);
  });

  return evolutions;
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
    const evolutions = await getEvolutions([], evolution.chain);

    //--------------------------------------------------------------------------------------

    const abilitiesPromises = pokeDetails.abilities.map(async ({ ability }) => {
      const abilityRes = await fetch(ability.url);
      const abilityDetails = await abilityRes.json();
      return {
        ...abilityDetails,
        flavorText: abilityDetails.flavor_text_entries.find(
          (e) => e.language.name === "en"
        )?.flavor_text,
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
          flavorText: moveDetails.flavor_text_entries.find(
            (e) => e.language.name === "en"
          )?.flavor_text,
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
      id: pokeDetails.id,
      order: pokeDetails.order,
      species: species,
      evolution: evolution,
      evolutions: evolutions,
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
      `${process.env.API_URL}/pokemon?offset=0&limit=471`
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
