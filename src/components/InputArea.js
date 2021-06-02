import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Card, Typography, Slider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import inputStyles from "./inputStyles";

const useStyles = makeStyles((theme) => {
  return inputStyles;
});

const InputArea = () => {
  const classes = useStyles();

  const [arrivalTime, setArrivalTime] = useState("9:00");
  const [departureTime, setDepartureTime] = useState("17:00");
  const [lunchTime, setLunchTime] = useState(0);

  const [workedHours, setWorkedHours] = useState([0, 0]);

  const date = new Date().toDateString();

  // This function timeDifference takes two times (arrivalTime and departureTime)
  // and returns an array that contains the difference between these times.
  // The first item of the array is the hours, the second item is the minutes

  function timeDifference(arrival, departure) {
    let hours = departure.split(":")[0] - arrival.split(":")[0];
    let minutes = departure.split(":")[1] - arrival.split(":")[1];

    if (hours < 0) {
      hours += 24;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    } else if (minutes >= 60) {
      minutes -= 60;
      hours++;
    }
    return [hours, minutes];
  }

  //Function to Display the timeDifference.
  const displayTime = (e) => {
    e.preventDefault();
    //Get the difference between the departure and arrival times.
    let totalTime = timeDifference(arrivalTime, departureTime);

    //Calculate the total time in minutes and then sub
    const totalMins = totalTime[0] * 60 + totalTime[1];
    const newMins = totalMins - lunchTime;

    totalTime[0] = Math.floor(newMins / 60);
    totalTime[1] = Math.round((newMins / 60 - totalTime[0]) * 60);

    setWorkedHours(totalTime);

    console.log(timeDifference(arrivalTime, departureTime));
  };

  return (
    <>
      <form className={classes.form} noValidate>
        <TextField
          onChange={(e) => setArrivalTime(e.target.value)}
          className={classes.field}
          variant="outlined"
          color="secondary"
          id="arrivalTime"
          label="Arrival Time"
          type="time"
          defaultValue="09:00"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          onChange={(e) => setDepartureTime(e.target.value)}
          className={classes.field}
          variant="outlined"
          id="departureTime"
          label="Departure Time"
          type="time"
          defaultValue="17:00"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </form>
      {/* This Slider is to get the number of minutes the employee took for lunch break 
        This App assumes that an employee has a maximum of one hour and a half for the lunch break.*/}
      <Typography id="discrete-slider" gutterBottom>
        Lunch Break (Minutes)
      </Typography>
      <Slider
        className={classes.fieldLunch}
        onChange={(e, newLunchTime) => setLunchTime(newLunchTime)}
        defaultValue={lunchTime}
        color="secondary"
        aria-labelledby="discrete-slider"
        value={lunchTime}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={90}
      />
      <div className={classes.submit}>
        <Button onClick={displayTime} variant="outlined" color="secondary">
          Save
        </Button>
      </div>

      <Card className={classes.card}>
        <Typography variant="h5">Today is {date}</Typography>
        <div className={classes.info}>
          <Typography variant="h6">
            Expected working hours for today: <span>8 hours </span>
          </Typography>
        </div>
        <div className={classes.info}>
          <Typography variant="h6">
            Hours Worked:{" "}
            <span>
              {workedHours[0]} hours and {workedHours[1]} minutes
            </span>
          </Typography>
        </div>
      </Card>
    </>
  );
};

export default InputArea;
