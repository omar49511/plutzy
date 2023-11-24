import VideoPlayer from "@/components/course/videoplayer/VideoPlayer";
import React from "react";

export default function page({ src }) {
  return (
    <div className="max-w-7xl m-auto pt-24">
      <VideoPlayer src="/ver2.mp4" />
    </div>
  );
}
