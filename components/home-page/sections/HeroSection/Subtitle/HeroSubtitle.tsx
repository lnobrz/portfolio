type Props = {
  saudation: string;
  presentation: string;
  name: string;
};

const HeroSubtitle = ({ saudation, presentation, name }: Props) => (
  <div
    className="profile-name tx-dark text-lg mt-35 mb-20"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    {`${saudation}. ${presentation} `}
    <span className="fw-500">{name}</span>
    {"."}
  </div>
);

export default HeroSubtitle;
