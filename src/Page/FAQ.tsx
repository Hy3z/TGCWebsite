import Accordion from "../Components/Accordion"



const FAQ = () => {
  const questionSet = ["Minim occaecat sit exercitation et minim culpa veniam consequat eu exercitation Lorem adipisicing.", "Adipisicing aliquip do id proident nisi.", "Excepteur id aute id ipsum", "Ipsum ullamco sint aliqua commodo deserunt ipsum culpa."]
  const answerSet = ["Exercitation magna Proident quis nulla nulla labore tempor ea tempor irure dolore pariatur sunt eu. Enim consequat magna nisi officia. Id proident ullamco dolor consequat deserunt amet cillum reprehenderit aliquip mollit. Fugiat nisi exercitation dolore minim anim do excepteur esse minim ea. aute quis.", "In cillum tempor aute laboris culpa qui ipsum qui cupidatat consequat fugiat. Reprehenderit aute proident ex id tempor cillum nulla laborum tempor enim. Quis duis duis ullamco irure irure consectetur dolor est velit in. Nulla velit ad culpa magna mollit. Cupidatat voluptate nulla consectetur aliqua voluptate qui Lorem quis do id. Esse commodo sunt officia dolore incididunt adipisicing ullamco ipsum dolore dolor aliqua aute ut sint.", "Enim ut nisi aliquip cupidatat dolore officia laborum laborum dolore ea cupidatat minim. Et aliqua ad culpa dolor. Culpa dolor mollit pariatur commodo irure ipsum non duis labore est excepteur id mollit. Sint cupidatat fugiat culpa in.", "Laborum amet aliquip duis aute excepteur ut laboris nisi. Enim magna nulla labore nisi do ullamco cupidatat nostrud. Aute quis mollit incididunt do reprehenderit incididunt minim aliqua. Fugiat proident dolore nostrud consectetur dolore cillum fugiat sint irure duis consectetur consectetur elit cupidatat. Proident tempor irure labore excepteur amet aliqua cupidatat aute aute excepteur laborum sunt consectetur adipisicing. Aliqua esse excepteur id excepteur."]
  const theme = "Laborum et dolore pariatur irure exercitation."
  return (
    <>
    <Accordion id="id1" header={theme} questions={questionSet} answers={answerSet}/>
    <Accordion id="id2" header={theme} questions={questionSet} answers={answerSet}/>
    <Accordion id="id3" header={theme} questions={questionSet} answers={answerSet}/>
    </>
  )
}

export default FAQ