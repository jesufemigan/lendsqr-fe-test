import Image from "next/image";
import style from "../../styles/components/AllUsersDetailsCard.module.scss";

interface IAllUserDetailsCard {
  icon: any;
  cardTitle: string;
  value: number;
  bgColor: string;
}

const AllUsersDetailsCard: React.FC<IAllUserDetailsCard> = ({
  icon,
  cardTitle,
  value,
  bgColor,
}) => {
  return (
    <div className={style.container}>
      <div className={style.icon} style={{ backgroundColor: bgColor }}>
        <Image src={icon} alt="icon" />
      </div>
      <p>{cardTitle}</p>
      <h1>{value.toLocaleString("en-US")}</h1>
    </div>
  );
};
export default AllUsersDetailsCard;
