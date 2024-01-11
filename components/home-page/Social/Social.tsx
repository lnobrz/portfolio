type Props = {
  socialIcons: {
    href: string;
    iconClass: string;
  }[];
};

const Social = ({ socialIcons }: Props) => {
  return (
    <ul className="d-flex justify-content-center social-icon style-none">
      {socialIcons.map((socialIcon, index) => (
        <li key={index}>
          <a href={socialIcon.href}>
            <i className={socialIcon.iconClass} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
