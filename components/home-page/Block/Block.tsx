import Image from "next/image";

type Props = {
  blocks: {
    iconSrc: string;
    bgColor: string;
    title: string;
  }[];
};

const Block = ({ blocks }: Props) => {
  return (
    <>
      {blocks.map((block, index) => (
        <div
          key={index}
          className="col-md-4 "
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div
            className="card-style-six md-mt-30 text-center"
            style={{ backgroundColor: block.bgColor }}
          >
            <div className="icon d-flex align-items-end justify-content-center">
              <Image
                src={block.iconSrc}
                alt="icon"
                className="lazy-img"
                width={65}
                height={64}
              />
            </div>
            <h4 className="mt-55 lg-mt-30">{block.title}</h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block;
