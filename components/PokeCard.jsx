import padWithZero from "@lib/padWithZero";
import pokeColors from "@lib/pokeColors";
import hexToRgba from "hex-to-rgba";
import Image from "next/image";
import { useRouter } from "next/router";

const PokeCard = ({ pokemon }) => {
  const types = pokemon.details.types || [];
  const id = parseInt(pokemon.url.match("pokemon/(.*)/")[1], 10);
  const router = useRouter();
  return (
    <div
      key={pokemon.name}
      className="w-1/2 px-2 mt-4"
      onClick={() => router.push(`/${pokemon.name}`)}
    >
      <div
        style={{
          background: hexToRgba(
            pokeColors[types[0]?.type?.name || "normal"],
            0.08
          ),
        }}
        className="overflow-hidden shadow-lg rounded-lg py-4 px-3"
      >
        <div
          style={{
            color: hexToRgba(pokeColors[types[0]?.type?.name || "normal"], 1),
          }}
          className="flex flex-row justify-between items-center"
        >
          <p className="font-medium text-base">{pokemon.name}</p>
          <p className="text-xs font-normal">#{padWithZero(id, 3)}</p>
        </div>
        <div className="min-h-[110px] relative w-full my-2">
          <Image
            objectFit="contain"
            alt={pokemon.name}
            src={pokemon.details.image}
            layout="fill"
          />
        </div>
        <div className="flex flex-row space-x-2 justify-center ">
          {types.map((t) => (
            <span
              key={t.slot}
              style={{
                background: hexToRgba(
                  pokeColors[t.type?.name || "normal"],
                  0.12
                ),
                color: hexToRgba(pokeColors[t.type?.name || "normal"], 1),
              }}
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
            >
              {t.type?.name || "normal"}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
