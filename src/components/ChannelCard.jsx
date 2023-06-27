import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, Typography, CardMedia, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        boxShadow: "none",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              width: "180px",
              height: "180px",
              mb: 2,
              borderRadius: "50%",
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6" fontWeight="bold">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography variant="subtitle2" fontWeight="bold">
              {channelDetail?.statistics?.subscriberCount} subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
