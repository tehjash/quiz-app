import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";

const Options = ({ item }) => {
  const [selectedAnswer, setSelectedAnswer] = useState();
  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };
  return (
    <div className="mt-2 ml-10">
      <FormLabel>Select correct Answer</FormLabel>
      <RadioGroup
        className="w-1/4"
        value={selectedAnswer}
        onChange={handleChange}
      >
        <FormControlLabel
          value={item.option1}
          control={<Radio />}
          label={item.option1}
        />
        <FormControlLabel
          value={item.option2}
          control={<Radio />}
          label={item.option2}
        />
        <FormControlLabel
          value={item.option3}
          control={<Radio />}
          label={item.option3}
        />
        <FormControlLabel
          value={item.option4}
          control={<Radio />}
          label={item.option4}
        />
      </RadioGroup>
    </div>
  );
};

export default Options;
