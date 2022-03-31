import { Card } from "components/Card";
import { Footer } from "components/Footer";
import { Menu } from "components/Menu";
import { ITopRatedDTO } from "dtos/ITopRatedDTO";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { api } from "services/api";

type IData = {
  search: string;
}

export function Search() {
  const { word_search } = useParams();

  const { handleSubmit, register } = useForm<IData>();

  const [word, setWord] = useState(word_search);
  const [search, setSearch] = useState<ITopRatedDTO[]>([]);

  useEffect(() => {
    if(word){
      api.get(`/posts?q=${word}`)
      .then((response) => {
          setSearch(response.data);
      });

      console.log('buscou na api a palavra: ', word);
  }
  }, [word]);

  function onSubmit(data: IData) {
    setWord(data.search);
  }

  return (
    <>
      <Menu />

      <section className="container">
            <h6 className="uppercase color-primary text-center">
                {search.length} resultados
            </h6>
            <h4 className="text-center">"{word}"</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="grid-2 disappear"></div>
                    <div className="grid-8 flex-center">
                        <input type="text" placeholder="Buscar..." {...register('search')} />
                        <button className="btn ml-2">Buscar</button>
                    </div>
                    <div className="grid-2 disappear"></div>
                </div>
            </form>

            <div className="row">
            {
                search.map((item) => {
                    return <Card key={item.id} post={item} />
                })
            }
            </div>

        </section>
      
      <Footer />
    </>  
  )
}
