import { useState, useEffect } from "react";
import Styles from "./css/Countdown.module.css";

interface Props {
  title: string;
  year: number;
  month: number;
  day: number;
  hour: number;
}

const Countdown = ({ title, year, month, day, hour }: Props) => {
  const eventDate = new Date(year, month, day, hour, 0, 0);
  const [countdown, setCountdown] = useState({
    months: "-",
    days: "-",
    hours: "-",
    minutes: "-",
    seconds: "-",
  });
  const [countdownStarted, setCountdownStarted] = useState(false);

  const updateCountdown = () => {
    const currentDate = new Date();
    const difference = eventDate.getTime() - currentDate.getTime();

    if (difference > 0) {
      const months = Math.floor(
        difference / (1000 * 60 * 60 * 24 * 30)
      ).toString();
      const days = Math.floor(
        (difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      ).toString();
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ).toString();
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      ).toString();
      const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString();

      setCountdown({ months, days, hours, minutes, seconds });
      setCountdownStarted(true);
    } else {
      // Event has passed, set countdown to 0
      setCountdown({
        months: "0",
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.title}>{title}</div>
      <div className={Styles.counter}>
        <div className={Styles.item}>
          <div className={Styles.value}>
            {countdownStarted ? countdown.months : "-"}
          </div>
          <div className={Styles.label}>Mois</div>
        </div>
        <div className={Styles.item}>
          <div className={Styles.value}>
            {countdownStarted ? countdown.days : "-"}
          </div>
          <div className={Styles.label}>Jours</div>
        </div>
        <div className={Styles.item}>
          <div className={Styles.value}>
            {countdownStarted ? countdown.hours : "-"}
          </div>
          <div className={Styles.label}>Heures</div>
        </div>
        <div className={Styles.item}>
          <div className={Styles.value}>
            {countdownStarted ? countdown.minutes : "-"}
          </div>
          <div className={Styles.label}>Minutes</div>
        </div>
        <div className={Styles.item}>
          <div className={Styles.value}>
            {countdownStarted ? countdown.seconds : "-"}
          </div>
          <div className={Styles.label}>Secondes</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
