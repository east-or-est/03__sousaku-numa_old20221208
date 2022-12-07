import Link from 'next/link';

interface PostMoreLinkProps {
  moreID: string;
  more: boolean;
}

function PostMoreLink({ moreID, more }: PostMoreLinkProps) {
  return (
    <>
      { more === true ?
        <div className="parts-btn_01">
          <Link
          href={{
            pathname: `/blog/${moreID}`
          }}
          target='_blank'
          rel="noopener noreferrer"
          >
            続きを読む
          </Link>
        </div>
        : false
      }
    </>
  );
}

export default PostMoreLink;