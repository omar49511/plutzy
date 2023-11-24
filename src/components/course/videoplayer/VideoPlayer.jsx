"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import VideoControls from "./VideoControls";

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => setProgress(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("durationchange", handleDurationChange);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("durationchange", handleDurationChange);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleVolumeChange = useCallback((e) => {
    const newVolume = e.target.value;

    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  }, []);

  const handlePlaybackRateChange = useCallback((e) => {
    const newPlaybackRate = e.target.value;
    videoRef.current.playbackRate = newPlaybackRate;
    setPlaybackRate(newPlaybackRate);
  }, []);

  const toggleFullScreen = useCallback(() => {
    const video = videoRef.current;

    if (!isFullscreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (document.webkitRequestFullscreenElement) {
        document.webkitExitFullscreen();
      } else if (document.msRequestFullscreenElement) {
        document.msExitFullscreen();
      } else if (document.mozRequestFullscreenElement) {
        document.mozCancelFullscreen();
      }
    }

    setIsFullscreen(!isFullscreen);
  }, [isFullscreen]);

  const handleProgressChange = useCallback((e) => {
    const newProgress = e.target.value;
    videoRef.current.currentTime = newProgress;
    setProgress(newProgress);
  }, []);

  return (
    <div className="relative border shadow-2xl shadow-black rounded-md overflow-hidden w-[1250px] h-[720px] drop-shadow-sm group">
      <video
        src={src}
        className="w-full h-full object-cover"
        ref={videoRef}
        onClick={togglePlay}
      ></video>
      <VideoControls
        // Estados
        progress={progress}
        duration={duration}
        isPlaying={isPlaying}
        volume={volume}
        playbackRate={playbackRate}
        isFullscreen={isFullscreen}
        // Funciones del Reproductor
        togglePlay={togglePlay}
        handleVolumeChange={handleVolumeChange}
        handlePlaybackRateChange={handlePlaybackRateChange}
        toggleFullScreen={toggleFullScreen}
        handleProgressChange={handleProgressChange}
      />
    </div>
  );
}
