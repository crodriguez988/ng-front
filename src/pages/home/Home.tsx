import 'react-multi-carousel/lib/styles.css';
import styles from './Home.module.css';
import JeuxMoment from './JeuxMoment';
import SortiesJeux from './SortiesJeux';

const Home = () => {
  return (
    <main>
      <article>
        <section className={`mx-auto padding ${styles.paddingTop}`}>
          <JeuxMoment />
          <SortiesJeux />
        </section>
      </article>
    </main>
  );
}

export default Home;