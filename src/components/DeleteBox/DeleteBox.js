import React from "react";
import Button from "../Button/Button";
import "./DeleteBox.scss";

export default function DeleteBox({
  onDelete,
  onRemove,
  comment,
  index,
  replyView,
}) {
  return (
    <div className="delete-box">
      <span>Are you sure you want to remove or Delete this comment?</span>
      <div className="delete-action">
        <Button
          type={"button"}
          children="Cancel"
          onClick={() => onDelete(comment)}
          className={"comment-view-button cancel-button"}
        />
        <Button
          type={"button"}
          children="Delete"
          onClick={() => onRemove(comment, index, replyView, "Delete")}
          className={"comment-view-button delete-button"}
        />
        <Button
          type={"button"}
          children="Remove"
          onClick={() => onRemove(comment, index, replyView, "Remove")}
          className={"comment-view-button delete-button"}
        />
      </div>
    </div>
  );
}
