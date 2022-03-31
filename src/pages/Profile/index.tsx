import { Footer } from 'components/Footer';
import { Menu } from 'components/Menu';

export function Profile() {
  return (
    <>
      <Menu />
      <section className="container">
        <div className="row">
          <div className="grid-6">
            <div className="flex-start-row">
              <div className="profile-big">
                <img src="profile/ny.jpg" className="profile-img" alt="" />
              </div>
              <div className="ml-2">
                <h3 className="color-white">Násser Yousef Ali</h3>
                <h6 className="color-gray">Author</h6>
              </div>
            </div>
            <p className="mt-3">
              Olá, bom dia! Seja bem-vindo ao blog. Compartilhe conhecimento.
            </p>
          </div>
          <div className="grid-6 flex-center">
            <a href="/" className="btn">
              Adicionar post
            </a>
            <a href="/" className="btn ml-4">
              Meus dados
            </a>
          </div>
        </div>
      </section>

      <section className="container">
        <form>
          <h3>Adicionar novo post</h3>
          <p className="mt-2">
            Preencha os campos abaixo para adicionar um novo post ao blog.
          </p>
          <div className="row p-0">
            <div className="grid-3 p-0">
              <label htmlFor="date">
                <h6 className="mb-1">Data</h6>
              </label>
              <input type="date" name="date" id="date" />
            </div>
            <div className="grid-3 p-0">
              <label htmlFor="category">
                <h6 className="mb-1">Categoria</h6>
              </label>
              <select name="category" id="category">
                <option value="tecnologia" selected>
                  Tecnologia
                </option>
                <option value="games">Games</option>
                <option value="fotografia">Fotografia</option>
                <option value="cinema">Cinema</option>
              </select>
            </div>
            <div className="grid-6 p-0">
              <label htmlFor="title">
                <h6 className="mb-1">Título</h6>
              </label>
              <input type="text" name="title" id="title" />
            </div>
          </div>

          <div className="row p-0">
            <div className="grid-12 p-0">
              <label htmlFor="resume">
                <h6 className="mb-1">Resumo do post</h6>
              </label>
              <input type="text" name="resume" id="resume" />
            </div>
          </div>

          <div className="row p-0">
            <div className="grid-8 p-0">
              <label htmlFor="imageUrl">
                <h6 className="mb-1">URL da imagem</h6>
              </label>
              <input type="text" name="imageUrl" id="imageUrl" />
            </div>
            <div className="grid-4 p-0">
              <label htmlFor="duration">
                <h6 className="mb-1">Duração de leitura</h6>
              </label>
              <select name="duration" id="duration">
                <option value="5" selected>
                  5 min.
                </option>
                <option value="7">7 min.</option>
                <option value="10">10 min.</option>
                <option value="15">15 min.</option>
              </select>
            </div>
          </div>

          <div className="row p-0">
            <div className="grid-12 p-0">
              <label htmlFor="content">
                <h6 className="mb-1">Conteúdo</h6>
              </label>
              <textarea name="content" id="content" rows={8}></textarea>
            </div>
          </div>

          <div className="flex-end-row mr-2 mt-2">
            <button className="btn">Adicionar</button>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
}
