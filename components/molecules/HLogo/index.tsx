import Link from 'next/link';
import { SITE_TITLE } from '../../../const/Meta/';

function HLogo() {
  return (
    <div>
      <Link
        href={{
          pathname:"/"
        }}
      >
        <img src="/asset/img/logo.png" alt={SITE_TITLE} />
      </Link>
    </div>
  );
}

export default HLogo;