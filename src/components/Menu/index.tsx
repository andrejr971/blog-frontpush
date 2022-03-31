import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import logoBlog from '../../assets/svg/blog-logo.svg';

type IData = {
  search: string;
}

export function Menu() {
  const { register, handleSubmit } = useForm<IData>();
  const navigate = useNavigate();
  
  async function onSubmit(data: IData) {
    navigate(`/search/${data.search}`);
  }

  return (
    <>
      <header className="py-1 px-2">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logoBlog} alt="" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="/about" className="p-1">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contact" className="p-1">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className="bx"></div>
        <div className="flex-start-row">
          <div className="search">
            <form className="flex" onSubmit={handleSubmit(onSubmit)}>
              <input type="text" id="" placeholder="Buscar..." {...register("search")} />
              <button className="btn-search"></button>
            </form>
          </div>
          <div className="cta-desktop ml-3">
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
          <div className="cta-mobile mr-1">
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="menu-mobile">
          <ul className="nav-mobile">
            <li>
              <Link to="/about" className="link-menu-mobile">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-menu-mobile">
                Contato
              </Link>
            </li>
            <li className="py-2 pl-2">
              <form className="flex" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="Buscar..."
                  {...register("search")}
                />
                <button className="btn-search"></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
