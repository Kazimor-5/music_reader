// ! FILES
import classes from './Song.module.css';
import Image from 'next/image';

type Song = {
  id: number;
  title: string;
  artist: string;
  file: string;
  image: string;
};

const Song = (props: { song: Song; isPlaying: boolean }) => {
  return (
    <>
      <article>
        <Image
          className={props.isPlaying ? classes.turning : classes.notTurning}
          src={props.song.image}
          width={300}
          height={300}
          alt="Pochette d'album"
        />
      </article>
      <article>
        <h2 className={classes.title}>{props.song.title}</h2>
        <p className={classes.artist}>{props.song.artist}</p>
      </article>
    </>
  );
};

export default Song;
