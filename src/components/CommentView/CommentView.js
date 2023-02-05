import React, { useState } from "react";
import Button from "../Button/Button";
import CommentBox from "../CommentBox/CommentBox";
import "./CommentView.scss";

export default function CommentView({
  comments,
  onSetComments,
  replyView = false,
}) {
  const [reply, setReply] = useState({});
  const [isDelete, setDelete] = useState({});

  const onReply = (data) => {
    reply.id === data.id ? setReply({}) : setReply(data);
    setDelete({});
  };

  const submitReply = (data) => {
    setReply(reply.children.push(data));
  };

  const onDelete = (data) => {
    isDelete.id === data.id ? setDelete({}) : setDelete(data);
  };

  const onRemove = (data, index, replyView, actionType) => {
    actionType === "Remove" ? comments.splice(index, 1) : (data.comment = "");
    setReply({});
    if (!replyView && comments.length === 0) {
      onSetComments([]);
    }
  };

  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <div
            className={`comment-view-container ${
              replyView ? "comment-reply" : "comment-view"
            }`}
            key={comment.id}
          >
            {comment.comment && comment.comment.length > 0 ? (
              <>
                <span className="comment">{comment.comment}</span>
                <Button
                  type={"button"}
                  children={isDelete.id === comment.id ? "Cancel" : "Delete"}
                  onClick={() => onDelete(comment)}
                  className={"comment-view-button delete-button"}
                />
                <Button
                  type={"button"}
                  children={reply.id === comment.id ? "Cancel" : "Reply"}
                  onClick={() => onReply(comment)}
                  className={"comment-view-button reply-button"}
                />
                {isDelete.id === comment.id ? (
                  <div className="delete-box">
                    <span>
                      Are you sure you want to remove or Delete this comment?
                    </span>
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
                        onClick={() =>
                          onRemove(comment, index, replyView, "Delete")
                        }
                        className={"comment-view-button delete-button"}
                      />
                      <Button
                        type={"button"}
                        children="Remove"
                        onClick={() =>
                          onRemove(comment, index, replyView, "Remove")
                        }
                        className={"comment-view-button delete-button"}
                      />
                    </div>
                  </div>
                ) : null}
              </>
            ) : (
              <>
                <span className="deleted-comment">Deleted</span>
              </>
            )}

            {reply.id === comment.id ? (
              <div className={`${"comment-reply"}`}>
                <CommentBox
                  onSetComments={submitReply}
                  submitType="reply"
                  submitReply={submitReply}
                />
              </div>
            ) : null}
            {comment.children.length ? (
              <CommentView comments={comment.children} replyView={true} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
