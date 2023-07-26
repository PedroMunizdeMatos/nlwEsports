import "./styles.css"

import Header from "./components/Header"
import ListItem from "./components/ListItem"
import Section from "./components/Section"

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
]
const channelListData = [
  {
    url: "https://www.twitch.tv/valorant_br",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {
    url: "https://www.twitch.tv/cblol",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
]
const socialListData = [
  {
    url: "https://www.instagram.com/phmuniz/",
    imageUrl: "/assets/instagram.svg",
    alt: "Instagram do Pedro",
  },
  {
    url: "https://www.twitter.com/",
    imageUrl: "/assets/twitter.svg",
    alt: "Twitter",
  },
  {
    url: "https://www.twitch.tv/",
    imageUrl: "/assets/twitch.svg",
    alt: "Twitch",
  },
  {
    url: "https://www.youtube.com/",
    imageUrl: "/assets/youtube.svg",
    alt: "Youtube",
  },
]

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus jogos"
          subtitle="Os games mais conhecidos"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            )
          })}
        </Section>

        <Section
          title="Canais e Streams"
          subtitle="Lista de Canais e transmissões"
          className="games-list"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            )
          })}
        </Section>
        <Section
          title="Minhas Redes"
          subtitle="Se conecte comigo agora mesmo"
          classNam="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            )
          })}
        </Section>
      </main>
    </div>
  )
}
