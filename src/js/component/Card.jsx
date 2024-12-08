import React from "react";

const Card = ({ title, text, imgUrl }) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <img src={imgUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
