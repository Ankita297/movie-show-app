import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import "./style.css"
const MovieCard = (props) => {
    return (
        <Row key={props.index} className=" d-flex justify-content-center">
        <Card
          className="bg-dark"
          style={{ width: "22rem", margin: "15px" }}
        >
          <Card.Img
            className="mt-2"
            variant="top"
            src={props.x.show.image.medium}
          />
          <Card.Body>
            <Card.Title className="title-heading">{props.x.show.name}</Card.Title>
            <Card.Text className="card-text">
                <div>
              <div className="sub-heading">Rating <span>{props.x.show.rating.average}</span></div>
              <div className="sub-heading">Language <span>{props.x.show.language} </span></div>
              <div className="sub-heading">
                genre{" "}
                {props.x.show.genres.map((x) => {
                  return <span> {x + " "} </span>;
                })}
              </div>
              </div>
            </Card.Text>
            <div className="d-flex justify-content-center">
            <Link className="link-btn" to={`/${props.index}`}>See the movie</Link>
            </div>
          </Card.Body>
        </Card>
      </Row>

    )
}

export default MovieCard
