import PostFile from '../../atoms/PostFile';

interface PostFilesProps {
  files: [];
}

interface PostFilesMapItemProps {
  type: string;
  name: string;
  caption: string | undefined;
}

function PostFiles({ files }: PostFilesProps) {

  return (
    <>
      {files.map(( data: PostFilesMapItemProps, index: number ) =>
        <PostFile
          key={index}
          type={data.type}
          name={data.name}
          caption={data.caption}
        />
      )}
    </>
  );
}

export default PostFiles;