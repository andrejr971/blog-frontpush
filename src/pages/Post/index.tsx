import { Footer } from 'components/Footer';
import { Menu } from 'components/Menu';
import { IAuthorDTO } from 'dtos/IAuthorDTO';
import { ITopRatedDTO } from 'dtos/ITopRatedDTO';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'services/api';

export function Post() {
  const [post, setPost] = useState({} as ITopRatedDTO);
  const [author, setAuthor] = useState({} as IAuthorDTO);
  const params = useParams();

  useEffect(() => {
    api.get(`/posts/${params.id}`).then(({ data }) => {
      setPost(data);
      
      if (data.user_id) {

        api.get(`/user/${data.user_id}`).then((response) => setAuthor(response.data));
      }
    });

  }, [params.id])


  return (
    <>
      <Menu />

      <section className="container">
        <h6 className="uppercase color-primary text-center">{post.category}</h6>
        <h3 className="text-center">{post.title}</h3>

        <div className="flex-center my-3">
          <div className="profile">
            <img src={author.ImageProfile} className="profile-img" alt="" />
          </div>
          <div className="ml-2">
            <h6 className="color-primary">{`${author.name} ${author.surname}`}</h6>
            <h6 className="color-gray">Author</h6>
          </div>
          <p className="ml-4">{post.date} - {post.duration} min read</p>
        </div>

        <div className="img-banner hidden">
          <img src={post.imageUrl} alt="" />
        </div>

        <div className="row my-3">
          <p className="mt-1">
            {post.content}
          </p>
        </div>

        <div className="row">
          <div className="grid-3 disappear"></div>
          <div className="grid-6 card">
            <div className="row">
              <div className="grid-3 flex-center pl-1">
                <div className="profile-big">
                  <img src={author.ImageProfile} className="profile-img" alt="" />
                </div>
              </div>
              <div className="grid-9">
                <h6 className="color-primary">{`${author.name} ${author.surname}`}</h6>
                <h6 className="color-gray">Author</h6>
                <p className="mt-1">
                  {author.description}
                </p>
              </div>
            </div>
          </div>
          <div className="grid-3 disappear"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
