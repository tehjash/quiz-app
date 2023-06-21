import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";

const Options = ({ item, score, setScore }) => {
  const [selectedAnswer, setSelectedAnswer] = useState();
  const handleChange = (event) => {
    // if selected correct. Score + 1
    if (event.target.value === item.correctAnswer) {
      setScore(score + 1);
    } else if (
      // if selected wrong + previous answer was correct
      event.target.value !== item.correctAnswer &&
      selectedAnswer === item.correctAnswer
    ) {
      setScore(score - 1);
    }
    // selected wrong + previous answer was also wrong. No change in score
    setSelectedAnswer(event.target.value);
  };

  return (
    <div className="mt-2 ml-10">
      <FormLabel>Select correct Answer</FormLabel>
      <RadioGroup
        className="w-1/4"
        // value={selectedAnswer}
        onChange={handleChange}
      >
        <FormControlLabel value="1" control={<Radio />} label={item.option1} />
        <FormControlLabel value="2" control={<Radio />} label={item.option2} />
        <FormControlLabel value="3" control={<Radio />} label={item.option3} />
        <FormControlLabel value="4" control={<Radio />} label={item.option4} />
      </RadioGroup>
    </div>
  );
};

export default Options;
