import { ITopRatedDTO } from "dtos/ITopRatedDTO";

interface IBannerProps {
  banner: ITopRatedDTO;
}

export function Banner({ banner }: IBannerProps) {
  return (
    <section className="container">
      <div className="img-banner hidden">
        <img src={banner.imageUrl} alt="" />
      </div>
      <div className="row mt-3">
        <h6 className="color-gray text-center">{banner.date}</h6>
        <h6 className="uppercase color-primary text-center">{banner.category}</h6>
        <a href="/" className="link-title">
          <h2 className="mt-1 text-center">
            {banner.title}
          </h2>
        </a>

        <p className="my-2 text-center">
          {banner.resume}
        </p>
        <div className="flex-center">
          <a href="/" className="link p-0">
            Ler mais
          </a>
        </div>
      </div>
    </section>
  );
}
