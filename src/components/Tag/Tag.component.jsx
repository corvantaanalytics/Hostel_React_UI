import React from "react";

function Tag({ text, status }) {
  let cl = "";

  switch (status.toLowerCase()) {
    case "pending":
      cl = "bg-yellow-P600 text-yellow-P50";
      break;

    case "disconnected":
      cl = "bg-red-P600 text-red-P50";
      break;

    case "connected":
      cl = "bg-green-P600 text-green-P50";
      break;

    case "failed":
      cl = "bg-red-P600 text-red-P50";
      break;

    case "deleted":
      cl = "bg-red-P600 text-red-P50";
      break;

    case "cancelled":
      cl = "bg-red-P600 text-red-P50";
      break;

    case "succeeded":
      cl = "bg-green-P600 text-green-P50";
      break;

    case "processed":
      cl = "bg-purple-P600 text-purple-P50";
      break;

    case "prepared":
      cl = "bg-purple-P600 text-purple-P50";
      break;

    default:
      break;
  }
  return (
    <label className={`${cl} py-1.5 px-3 rounded-xl capitalize`}>{text}</label>
  );
}

export default Tag;
