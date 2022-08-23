// ! COMPONENTS
import Song from '../components/Song/Song';
import Audio from '../components/Audio/Audio';
// ! FILES
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

const Songs: Song[] = [
  {
    id: 0,
    title: 'Niveau 1',
    artist: 'Népal',
    file: '/songs/445e Nuit/01 Niveau 1.mp3',
    image: '/covers/445enuit.png',
  },
  {
    id: 1,
    title: 'Maladavexa',
    artist: 'Népal',
    file: '/songs/445e Nuit/02 Maladavexa.mp3',
    image: '/covers/445enuit.png',
  },
  {
    id: 2,
    title: 'Love64',
    artist: 'Népal',
    file: '/songs/445e Nuit/03 Love64 (Interlude).mp3',
    image: '/covers/445enuit.png',
  },
  {
    id: 3,
    title: 'Deadpornstars',
    artist: 'Népal',
    file: '/songs/445e Nuit/04 Deadpornstars ft. Doums.mp3',
    image: '/covers/445enuit.png',
  },
  {
    id: 4,
    title: 'Jugements',
    artist: 'Népal',
    file: '/songs/445e Nuit/05 Jugements ft. 3010.mp3',
    image: '/covers/445enuit.png',
  },
  {
    id: 5,
    title: 'Insomnie',
    artist: 'Népal',
    file: '/songs/445e Nuit/06 Insomnie.mp3',
    image: '/covers/445enuit.png',
  },
  {
    id: 6,
    title: 'Kodak White',
    artist: 'Népal',
    file: '/songs/445e Nuit/07 Kodak White.mp3',
    image: '/covers/445enuit.png',
  },
  {
    id: 7,
    title: 'Kamehouse',
    artist: 'Népal',
    file: '/songs/445e Nuit/08 Kamehouse.mp3',
    image: '/covers/445enuit.png',
  },
  {
    id: 8,
    title: 'Laisse Rouler',
    artist: 'Népal',
    file: '/songs/444 Nuits/VERSION BLEUE/01 Laisse Rouler.mp3',
    image: '/covers/444nuitbleue.jpg',
  },
  {
    id: 9,
    title: 'Oxmose',
    artist: 'Népal',
    file: '/songs/444 Nuits/VERSION BLEUE/02 Oxmose.mp3',
    image: '/covers/444nuitbleue.jpg',
  },
  {
    id: 10,
    title: "Rien d'Spécial",
    artist: 'Népal',
    file: "/songs/444 Nuits/VERSION BLEUE/03 Rien d'Spécial.mp3",
    image: '/covers/444nuitbleue.jpg',
  },
  {
    id: 11,
    title: '444 Nuits',
    artist: 'Népal',
    file: '/songs/444 Nuits/VERSION BLEUE/04 444 Nuits.mp3',
    image: '/covers/444nuitbleue.jpg',
  },
  {
    id: 12,
    title: 'YOLO',
    artist: 'Népal',
    file: '/songs/444 Nuits/VERSION BLEUE/05 YOLO.mp3',
    image: '/covers/444nuitbleue.jpg',
  },
  {
    id: 13,
    title: 'Malik Al Mawt',
    artist: 'Népal',
    file: '/songs/444 Nuits/VERSION BLEUE/06 Malik Al Mawt.mp3',
    image: '/covers/444nuitbleue.jpg',
  },
  {
    id: 14,
    title: 'Faute de Time',
    artist: 'Népal',
    file: '/songs/444 Nuits/VERSION ROUGE/01 Faute De Time.mp3',
    image: '/covers/444nuitrouge.jpg',
  },
  {
    id: 15,
    title: 'Overdab',
    artist: 'Népal',
    file: '/songs/444 Nuits/VERSION ROUGE/02 Overdab ft. Fixpen Sill & Waltmann.mp3',
    image: '/covers/444nuitrouge.jpg',
  },
  {
    id: 16,
    title: 'Bizarre City',
    artist: 'Népal',
    file: '/songs/444 Nuits/VERSION ROUGE/03 Bizarre City ft. M Le Maudit.mp3',
    image: '/covers/444nuitrouge.jpg',
  },
  {
    id: 17,
    title: 'Suga Suga',
    artist: 'Népal',
    file: '/songs/444 Nuits/VERSION ROUGE/04 Suga Suga ft. Doums.mp3',
    image: '/covers/444nuitrouge.jpg',
  },
  {
    id: 18,
    title: 'Emoji',
    artist: 'Népal',
    file: '/songs/444 Nuits/VERSION ROUGE/05 Emoji.mp3',
    image: '/covers/444nuitrouge.jpg',
  },
  {
    id: 19,
    title: 'Outro',
    artist: 'Népal',
    file: '/songs/444 Nuits/VERSION ROUGE/06 Outro.mp3',
    image: '/covers/444nuitrouge.jpg',
  },
  {
    id: 20,
    title: 'Omotesando',
    artist: 'Népal',
    file: '/songs/KKSHISENS8/01 Omotesando.mp3',
    image: '/covers/kkshisens8.png',
  },
  {
    id: 21,
    title: 'Evisu',
    artist: 'Népal',
    file: '/songs/KKSHISENS8/02 Evisu.mp3',
    image: '/covers/kkshisens8.png',
  },
  {
    id: 22,
    title: 'Babylone',
    artist: 'Népal',
    file: '/songs/KKSHISENS8/03 Babylone.mp3',
    image: '/covers/kkshisens8.png',
  },
  {
    id: 23,
    title: '150CC',
    artist: 'Népal',
    file: '/songs/KKSHISENS8/04 150CC ft. Gracy Hopkins.mp3',
    image: '/covers/kkshisens8.png',
  },
  {
    id: 24,
    title: 'City Lights',
    artist: 'Népal',
    file: '/songs/KKSHISENS8/05 City Lights ft. Doums.mp3',
    image: '/covers/kkshisens8.png',
  },
  {
    id: 25,
    title: 'Necronomicon',
    artist: 'Népal',
    file: '/songs/KKSHISENS8/06 Necronomicon ft. Bohemian Club.mp3',
    image: '/covers/kkshisens8.png',
  },
  {
    id: 26,
    title: 'Teczer',
    artist: 'Népal',
    file: '/songs/KKSHISENS8/07 Teczer.mp3',
    image: '/covers/kkshisens8.png',
  },
  {
    id: 27,
    title: 'Cloud8',
    artist: 'Népal',
    file: '/songs/KKSHISENS8/08 Cloud8.mp3',
    image: '/covers/kkshisens8.png',
  },
];

export const getStaticProps = async () => {
  const allSongs: Song[] = Songs;

  return {
    props: {
      songs: allSongs,
    },
    revalidate: 3600,
  };
};

const Home: NextPage<{ songs: Song[] }> = ({ songs }) => {
  const [trackPlaying, setTrackPlaying] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <main className={styles.container}>
      <section>
        <Song song={songs[trackPlaying]} isPlaying={isPlaying} />
      </section>
      <Audio
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={songs}
        trackPlaying={trackPlaying}
        setTrackPlaying={setTrackPlaying}
      />
    </main>
  );
};

export default Home;
