import Styles from "./css/TeamCard.module.css";

interface Props {
  teamName: string;
  teamMembers: string[];
}

const TeamCard = ({ teamName, teamMembers }: Props) => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.name}>{teamName}</h1>
      <ul className={Styles.players}>
        {teamMembers.map((member) => (
          <li className={Styles.player}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamCard;
