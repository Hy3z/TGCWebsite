import Countdown from "../Components/Countdown";

const Contact = () => {
  return (
    <>
      <div>Contact</div>
      <Countdown
      title={"Prochaine Event!"}
      year={2024}
      month={11}
      day={20}
      hour={9}
      />
    </>
  );
};

export default Contact;
