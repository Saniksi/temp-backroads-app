import { Title } from './Title';
import { Tour } from './Tour';

export const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <Title title="featured" subTitle="tours" />
      </div>

      <div className="section-center featured-center">
        <Tour />
      </div>
    </section>
  );
};
