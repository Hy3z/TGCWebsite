import Styles from "./css/Accordion.module.css"

interface Props {
  id: string;
  header: string;
  questions: string[];
  answers: string[];
}

const Accordion = ({id, header, questions, answers }: Props) => {
  return (
    <div className={Styles.container}>
      <h1>{header}</h1>
      <div className="accordion" id={id}>
        {questions.map((question, index) => (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}${id}`}
                aria-expanded="false"
                aria-controls={`collapse${index}${id}`}
              >
                {question}
              </button>
            </h2>
            <div
              id={`collapse${index}${id}`}
              className="accordion-collapse collapse"
              data-bs-parent={`#${id}`}
            >
              <div className="accordion-body">{answers[index]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
