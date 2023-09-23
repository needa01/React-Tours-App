// import "./Tours.css";
import Card from "./Card";
function Tours({tours,removetour}) {
  return (
    <div className="container">
        <div>
            <h2 className="title"> Plan With Me </h2>
        </div>
        {/* //for keeping cards of tours */ }
        <div className="cards">
            {
                tours.map((tour)=>{
                    return(<Card key={tour.id} {...tour} removetour={removetour}></Card>)
                })
            }
        </div>
    </div>
  );
}
export default Tours;
