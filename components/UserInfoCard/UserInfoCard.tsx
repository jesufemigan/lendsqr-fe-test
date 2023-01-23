import style from "../../styles/components/UserInfoCard.module.scss";

interface IUserInfoCard {
  heading: string;
  userDetailsArray: {
    title: string;
    info: string;
  }[];
}

const UserInfoCard: React.FC<IUserInfoCard> = ({
  heading,
  userDetailsArray,
}) => {
  return (
    <div className={style.container}>
      <h1>{heading}</h1>
      <div className={style.allDetails}>
        {userDetailsArray.map((details) => (
          <span key={details.title}>
            <p className={style.title}>{details.title}</p>
            <p className={style.info}>{details.info}</p>
          </span>
        ))}
      </div>
    </div>
  );
};
export default UserInfoCard;
