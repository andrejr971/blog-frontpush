import { IAuthorDTO } from 'dtos/IAuthorDTO';
import { ITopRatedDTO } from 'dtos/ITopRatedDTO';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from 'services/api';

interface IMainCardProps {
  topRated: ITopRatedDTO;
}

export function MainCard({ topRated }: IMainCardProps) {
  const [author, setAuthor] = useState({} as IAuthorDTO);

  useEffect(() => {
    api.get(`user/${topRated.user_id}`).then(({ data }) => {
      setAuthor(data);
    });
  }, [topRated.user_id]);

  return (
    <div className="py-3 bb-black ">
      <h6 className="color-gray">{topRated.date}</h6>
      <h6 className="uppercase color-primary">
        {topRated.category.toUpperCase()}
      </h6>
      <Link to={`/post/${topRated.id}`} className="link-title">
        <h4 className="mt-1">{topRated.title}</h4>
      </Link>

      <p className="mt-1">{topRated.resume}</p>
      <div className="mt-2 flex-space">
        <div className="flex-start-row">
          <div className="profile">
            <img src={author.ImageProfile} className="profile-img" alt="" />
          </div>
          <div className="ml-2">
            <h6 className="color-primary">{author.name} {author.surname}</h6>
            <h6 className="color-gray">Author</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
