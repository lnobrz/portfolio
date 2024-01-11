type Props = {
  socialMedia: {
    name: string;
    icon: string;
    url: string;
  }[];
};

const SocialShare = ({ socialMedia }: Props) => {
  return (
    <ul className="style-none social-icon circle-shape d-flex pt-10">
      {socialMedia.map((platform) => (
        <li
          key={platform.name}
          className="rounded-circle d-flex align-items-center justify-content-center"
        >
          <a href={platform.url}>
            <i className={platform.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialShare;
