"use client";
import React from "react";
import { Button } from "./ui/button";

function ExploreButton() {
  const handleExploreStag = () => {
    if (window) {
      window.location.href = "https://stag.soclif.com";
    }
  };
  return (
    <Button onClick={() => handleExploreStag()} variant={"destructive"}>
      Explore Beta Version
    </Button>
  );
}

export default ExploreButton;
