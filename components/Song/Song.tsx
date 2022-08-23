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
      <div>
        <Image
          className={props.isPlaying ? classes.turning : classes.notTurning}
          src={props.song.image}
          width={300}
          height={300}
          alt='Pochette de 445ème Nuit'
        />
      </div>
    </>
  );
};

export default Song;
