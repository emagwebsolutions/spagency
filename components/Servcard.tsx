
type Obj = {
  heading: string;
  fa: string; 
  text: string
}
const Servcard = ({heading,fa,text}: Obj) => {
  return (
    <div className="servcard">
    <i className={`fa fa-${fa}`}></i>
    <h2>{heading}</h2>
    <div className="divide"></div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptate voluptatem dolore molestiae praesentium maxime cupiditate, placeat eos quidem recusandae iste sit sapiente voluptates, mollitia tempora non dolorum qui id.
    </div>
  </div>
  )
}

export default Servcard