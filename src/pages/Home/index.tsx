import { Banner } from 'components/Banner';
import { Card } from 'components/Card';
import { Footer } from 'components/Footer';
import { Hero } from 'components/Hero';
import { MainCard } from 'components/MainCard';
import { Menu } from 'components/Menu';
import { ITopRatedDTO } from 'dtos/ITopRatedDTO';
import { useEffect, useState } from 'react';
import { api } from 'services/api';

import iconStar from '../../assets/svg/icon-star.svg';

export function Home() {
  const [topRateds, setTopRateds] = useState<ITopRatedDTO[]>([]);
  const [banner, setBanner] = useState<ITopRatedDTO>({} as ITopRatedDTO);
  const [mostseen, setMostseen] = useState<ITopRatedDTO[]>([]);

  useEffect(() => {
    async function loadTopRated() {
      const { data } = await api.get('posts', {
        params: {
          _sort: 'star',
          _order: 'desc',
          _limit: 2,
          _expand: 'user',
        }
      });

      console.log(data)

      setTopRateds(data);
    }
    
    async function loadBanner() {
      const { data } = await api.get('posts', {
        params: {
          _sort: 'date',
          _order: 'desc',
          _limit: 1,
          _expand: 'user'
        }
      });

      setBanner(data[0]);
    }

    async function loadMostseen() {
      const { data } = await api.get('posts', {
        params: {
          _sort: 'views',
          _order: 'desc',
          _limit: 3,
          _expand: 'user'
        }
      });

      setMostseen(data);
    }

    loadTopRated();
    loadBanner();
    loadMostseen();

  }, []);


  return (
    <>
      <Menu />
      
      <Hero />

      <section className="container">
        <div className="row">
          <div className="grid-5 pt-5 pb-3">
            <img src={iconStar} className="icon-l" alt="" />

            <h2 className="mt-1">
              Os melhores e mais bem votados posts do mês.
            </h2>

            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ornare urna pharetra ut ac,
              pellentesque.
            </p>
          </div>
          <div className="grid-7">
            {!!topRateds && topRateds.map(topRated => (
              <MainCard key={topRated.id} topRated={topRated} />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-section">
        <section className="container">
          <h3 className="ml-2 mb-3">Mais vistos</h3>
          <div className="row">
            {!!mostseen && mostseen.map(post => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>

      <Banner banner={banner} />

      <Footer />
    </>
  );
}
