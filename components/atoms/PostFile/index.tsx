interface PostFileProps {
  type: string;
  name: string;
  caption: string | undefined;
}

function PostFile({ type, name, caption = '' }: PostFileProps) {

  return (
    <figure>
      {( () => {
        switch (type[0]) {
          case '画像':
            return <img src={`/asset/img/blog/${name}`} alt="" />;
          case '音声':
            return <audio controls src={`/asset/audio/blog/${name}`} controlsList="nodownload noplaybackrate"></audio>
          case '動画':
            return <video controls src={`/asset/movie/blog/${name}`} controlsList="nodownload"></video>
          default:
            return <img src={`/asset/img/blog/${name}`} alt="" />;
        }
      }) ()}
      { caption !== '' ?
        <figcaption>
          <p>
            {caption}
          </p>
        </figcaption>
        : false
      }
    </figure>
  );
}

export default PostFile;