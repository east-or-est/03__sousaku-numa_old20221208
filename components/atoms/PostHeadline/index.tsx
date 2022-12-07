interface PostHeadlineProps {
  headline: string | undefined;
  headline_component: string | [];
}

function PostHeadline({ headline, headline_component }: PostHeadlineProps) {

  return (
    <>
      {( () => {
        switch (headline_component[0]) {
          case 'H2':
            return <h2>{headline}</h2>;
          case 'H3':
            return <h3>{headline}</h3>;
          case 'H4':
            return <h4>{headline}</h4>;
          case 'H5':
            return <h5>{headline}</h5>;
          case 'H6':
            return <h6>{headline}</h6>;
          default:
            return <h2>{headline}</h2>;
        }
      }) ()}
    </>
  );
}

export default PostHeadline;