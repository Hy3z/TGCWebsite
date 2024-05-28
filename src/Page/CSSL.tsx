import Countdown from "../Components/Countdown";
import Styles from "./css/CSSL.module.css";
import TeamCard from "../Components/TeamCard";
import TeamInfo from "../data/CSSLTeams";

const CSSL = () => {
  return (
    <div className={Styles.pageContainer}>
      <div className={Styles.header}>
        <div className={Styles.title}>
          Counter-Strike Student League <p />
          1ère édition
        </div>
        <div className={Styles.countdown}>
          <Countdown
            title="La grande final à Telemcom!"
            year={2024}
            month={7}
            day={25}
            hour={12}
          />
        </div>
      </div>

      <div className={Styles.body}>
        <div className={Styles.rules}>
          <div className={Styles.title}>Déroulement de l'événement:</div>
          <div className={Styles.content}>
            <div className={Styles.pool}>
              <div className={Styles.title}>Phase de pool:</div>
              <div className={Styles.text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                velit accusantium voluptas, veritatis iure mollitia consequuntur
                nesciunt adipisci maxime ratione ullam explicabo accusamus sed
                perferendis, exercitationem vitae quia minima pariatur.
              </div>
            </div>
            <div className={Styles.playoff}>
              <div className={Styles.title}>Play off:</div>
              <div className={Styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                error recusandae beatae ullam suscipit explicabo esse labore
                consectetur! At modi autem aspernatur quos quia placeat sequi
                excepturi impedit consectetur animi?
              </div>
            </div>
            <div className={Styles.cashPrize}>
              <div className={Styles.title}>Cash prize!</div>
              <div className={Styles.text}>
                Pour les trois meilleur équipes, un cash prize de 2000€ sera
                réparti
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.teamSection}>
          <div className={Styles.title}>Les équipes participantes</div>
          <div className={Styles.teams}>
            {TeamInfo["teams"].map((team) => (
              <TeamCard
                teamName={team.teamName}
                teamMembers={team.teamMembers}
              />
            ))}
          </div>
        </div>

        <div className={Styles.contact}>
          Pour toutes question sur l'événement ou pour nous contacter
          directement, rendez-vous sur le <a href="#">discrod de la CSSL </a>
        </div>
      </div>
    </div>
  );
};

export default CSSL;
