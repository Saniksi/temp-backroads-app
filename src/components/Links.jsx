import { Link } from './Link';
import { pageLinks } from '../data.js';

export function Links({ parentClass, itemClass }) {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <Link key={link.id} itemClass={itemClass} {...link} />;
      })}
    </ul>
  );
}
