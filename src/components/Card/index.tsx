import { ITopRatedDTO } from "dtos/ITopRatedDTO";
import { Link } from "react-router-dom";

interface ICardProps {
  post: ITopRatedDTO;
}

export function Card({ post }: ICardProps) {
  return (
    <div className="grid-4 card hidden p-0">
      <div className="thumb hidden">
        <Link to={`/post/${post.id}`} className="p-0">
          <img src={post.imageUrl} alt="" />
        </Link>
      </div>
      <div className="p-2">
        <h6 className="color-gray">{post.date}</h6>
        <h6 className="uppercase color-primary">{post.category}</h6>
        <Link to={`/post/${post.id}`} className="link-title">
          <h4 className="mt-1">{post.title}</h4>
        </Link>

        <p className="my-2">
          {post.resume}
        </p>
        <Link to={`/post/${post.id}`} className="link p-0">
          Ler mais
        </Link>
      </div>
    </div>
  );
}
