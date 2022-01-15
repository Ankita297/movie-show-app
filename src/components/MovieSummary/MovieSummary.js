import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router";
import "./style.css";

const MovieSummary = () => {
  const [formShow, setFormShow] = useState(false);

  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
const [userEmail,setUserEmail]=useState("");
const [userName,setUserName]=useState("")
  const params = useParams();

  const responsedata = async () => {
    setLoading(true);
    setIsError(false);
    try {
      console.log(params.uid);
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${params.uid}`
      );

      const result = await response.json();
      console.log(result);

      let ans = result.filter((x, index) => {
        return index == params.uid;
      });

      setResult(ans[0]);
      console.log(ans[0]);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    responsedata();
  }, []);

  const submitHandler = (event) => {
    alert("You have booke your ticket kindly checkout our other movies ");
    console.log(userEmail,userEmail)
    const user_details={
        userEmail:userEmail,
        userName:userName
    }
    localStorage.setItem("movie-show",JSON.stringify(user_details))
  };

  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      {loading && !isError && "laoding"}
      {!loading && !isError && (
        <>
          <div className="pt-5 mt-5 movie-summary">
            <h1>{result.show.name} </h1>

            <img src={result.show.image.medium} />
            <div className="d-flex justify-content-center ">
              <p>{result.show.summary}</p>
            </div>
          </div>
        </>
      )}
      {formShow && (
        <>
          <h1 className="text-center">Book the ticket</h1>
          <div className="d-flex justify-content-center mb-4 pb-4">
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Enter your name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required onChange={(event)=>{
                    setUserName(event.target.value)
                }} name={userName}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Email" required>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required onChange={(event)=>{
                    setUserEmail(event.target.userEmail)
                }}  name={userEmail}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              &nbsp; &nbsp; &nbsp;
              <Button
                onClick={() => {
                  setFormShow(false);
                }}
              >
                Cancel
              </Button>
            </Form>
          </div>
        </>
      )}
      {!formShow && (
        <div className="d-flex justify-content-center">
          <Button
            onClick={() => {
              setFormShow(true);
            }}
          >
            Book the ticket
          </Button>
        </div>
      )}
    </div>
  );
};

export default MovieSummary;
