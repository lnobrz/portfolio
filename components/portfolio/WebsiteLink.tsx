type Props = {
  url: string;
};
const WebsiteLink = ({ url }: Props) => {
  return (
    <ul className="style-none social-icon circle-shape d-flex pt-10">
      <li className="rounded-circle d-flex align-items-center justify-content-center">
        <a href={url}>
          <i className="bi bi-globe"></i>
        </a>
      </li>
    </ul>
  );
};

export default WebsiteLink;
