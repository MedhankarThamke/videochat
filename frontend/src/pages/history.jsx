import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import { IconButton, TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);

  const [meetings, setMeetings] = useState([]);

  const routeTo = useNavigate();
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        // console.log("Fetched history:", history); // Add this

        setMeetings(history);
      } catch {
        // IMPLEMENT SNACKBAR
        console.error("Error fetching meeting history");
      }
    };

    fetchHistory();
  }, []);

  let formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format

    return `${day}/${month}/${year}  ${hours}:${minutes} ${ampm}`;
  };

  //   console.log(`meeting ${meetings}`);
  return (
    <div>
      <IconButton
        onClick={() => {
          routeTo("/home");
        }}
      >
        <HomeIcon />
      </IconButton>
      {meetings.length !== 0 ? (
        meetings.map((e, i) => {
          return (
            <>
              <Card key={i} variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Code: {e.meetingCode}
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Date: {formatDate(e.date)}
                  </Typography>
                </CardContent>
              </Card>
            </>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
