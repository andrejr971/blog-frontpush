import { Footer } from 'components/Footer';
import { Menu } from 'components/Menu';
import { Link } from 'react-router-dom';

import logoBlog from '../../assets/svg/blog.svg';

export function About() {
  return (
    <>
      <Menu />

      <section className="container flex-center">
        <div className="row mt-9">
          <div className="grid-5">
            <h1 className="h0">
              blog<span>.</span>{' '}
            </h1>
            <p>
              O Blog é um projeto desenvolvido em ReactJS para o curso
              FrontPush. Clique abaixo para saber de mias informações.
            </p>
            <Link to="/" className="btn mt-2">
              Saber mais
            </Link>
          </div>
          <div className="grid-1"></div>
          <div className="grid-6 flex-center">
            <img
              src={logoBlog}
              style={{
                maxWidth: 360,
              }}
              className="icon-l"
              alt=""
            />
          </div>
          <div className="grid-1"></div>
        </div>
      </section>

      <Footer />
    </>
  );
}
