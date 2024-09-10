import React, { useEffect, useState, useId } from "react";
import Button from "../Button";
import RatingReview from "./Star";
import ThankingUser from "../ThankingUser";

const Questions = ({ questions }) => {
  let [username, setusername] = useState("");
  let [useremail, setuseremail] = useState("");
  const [currentquestionindx, setcurrentquestionindx] = useState(1);
  const [useranswers, setuseranswers] = useState([]);
  const [rating, setRating] = useState(0);
  const [usertext, setusertext] = useState("");

  const id = useId();
  useEffect(() => {
    username = prompt("Enter your name");
    useremail = prompt("Enter your email");
    setusername(username);
    setuseremail(useremail);
  }, []);
  
  useEffect(() => {
    // Set the rating to the stored rating for the current question index
    setRating(useranswers[currentquestionindx - 1] || 0);
  }, [currentquestionindx, useranswers]);

  const additem = (newitem) => {
    setuseranswers([...useranswers, newitem]);
  };
  const handleNext = () => {
    if (currentquestionindx < questions.length) {
      if (rating > 0) {
        const updatedAnswers = [...useranswers];
        updatedAnswers[currentquestionindx - 1] = rating;
        setuseranswers(updatedAnswers);
      }
      setRating(0);
      if (currentquestionindx < questions.length) {
        setcurrentquestionindx(currentquestionindx + 1);
        // Update the rating state with the rating for the new question
        setRating(useranswers[currentquestionindx] || 0);
      }
    }
  };
  const handlePrevious = () => {
    if (currentquestionindx > 1) {
      const prevIndex = currentquestionindx - 2;
      setcurrentquestionindx(currentquestionindx - 1);
      setRating(useranswers[prevIndex] || 0);
    }
  };
  const userText = (e) => {
    setusertext(e.target.value);
    console.log(usertext);
  };

  const handleSubmit = () => {
    alert("Are u ready to submit");
    if (alert) {
      if (username && useremail) {
        const userKey = `user_${Date.now()}`;
        const newUser = {
          username: username,
          useremail: useremail,
          userId: id,
          userratings: useranswers,
          userFeedback: usertext,
        };
        localStorage.setItem(userKey, JSON.stringify(newUser));

        alert("Your information has been saved.");
      }
    }
  };

  return (
    <div>
      <div className="">
        <h1 className="text-6xl text-center mt-4">Customer Survey</h1>
      </div>
      <div className="questions">
        <div className="ques1 flex flex-col items-center mt-40 text-4xl">
          <h2> {`Question ${currentquestionindx}/${questions.length}`}</h2>
          <h1 className="mb-5">{questions[currentquestionindx - 1]}</h1>
          {currentquestionindx === 4 && currentquestionindx < 5 ? (
            <RatingReview rating={rating} setRating={setRating} length={10} />
          ) : (
            currentquestionindx < 4 && (
              <RatingReview rating={rating} setRating={setRating} length={5} />
            )
          )}
          {currentquestionindx === 5 && (
            <textarea
              onChange={userText}
              type="text"
              placeholder="Type here..."
              className="rounded-xl border-8 border-black p-3 bg-beige text-black h-[200px] w-[600px] "
            ></textarea>
          )}
        </div>
      </div>
      <div className="buttons flex gap- justify-between mx-6">
        <Button name="Prev" onclick={handlePrevious} />
        <Button name="Next" onclick={handleNext} />
      </div>
      <div className="flex justify-center h-[50px] items-center">
        {currentquestionindx === questions.length && (
          <Button name="Submit" onclick={handleSubmit} link={"/thankyou"} />
        )}
      </div>
    </div>
  );
};

export default Questions;
