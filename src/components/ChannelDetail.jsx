import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(199,13,201,1) 1%, rgba(101,101,187,1) 53%, rgba(0,212,255,1) 100%)",
            height: "300px",
            zIndex: "10",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
