import { HeroList } from '../components';
import { heroes } from '../data/heroes';

export const DCPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </>
  );
};
