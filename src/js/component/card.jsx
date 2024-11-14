import React from "react";

const Card = () => {
    return (
        <div className="card d-inline-flex col-12 col-md-6 col-lg-3 mt-5 px-1 border border-0">
            <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, ratione error pariatur earum eveniet obcaecati facere laudantium sed minus doloribus dignissimos culpa, tenetur, fugit corrupti ipsum cupiditate quod nostrum nemo.</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}

export default Card;