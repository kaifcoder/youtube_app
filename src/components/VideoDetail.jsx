import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  Paper,
} from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import ReactPlayer from "react-player";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideo(data?.items[0])
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography
              variant="h5"
              fontWeight="bold"
              mb={2}
              sx={{ color: "white" }}
              px={2}
            >
              {video?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "white" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${video?.snippet?.channelId}`}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  mb={2}
                  sx={{ color: "white" }}
                >
                  {video?.snippet?.channelTitle}
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ color: "white" }}>
                  {parseInt(video?.statistics?.viewCount).toLocaleString()}{" "}
                  Views
                </Typography>
                <Typography variant="body1" sx={{ color: "white" }}>
                  {parseInt(video?.statistics?.likeCount).toLocaleString()}{" "}
                  Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
