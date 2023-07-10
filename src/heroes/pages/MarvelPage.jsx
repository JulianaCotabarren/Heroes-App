import { HeroList } from '../components';
import { heroes } from '../data/heroes';

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
};
