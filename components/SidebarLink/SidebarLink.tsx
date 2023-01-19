import Image from "next/image";
import style from "../../styles/components/SidebarLink.module.scss";

interface ISidebarLink {
  image: any;
  name: string;
  exclusive?: boolean;
}

const SidebarLink: React.FC<ISidebarLink> = ({ image, name, exclusive }) => {
  return (
    <span className={`${!exclusive && style.dashboardLink} ${style.normal}`}>
      <Image src={image} alt="icon" />
      <p>{name}</p>
    </span>
  );
};
export default SidebarLink;
