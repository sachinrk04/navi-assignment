import React, { useState } from "react";
import Button from "../Button/Button";
import CommentBox from "../CommentBox/CommentBox";
import DeleteBox from "../DeleteBox/DeleteBox";
import HumanReadableTimeFormat from "../HumanReadableTimeFormat/HumanReadableTimeFormat";
import "./CommentView.scss";

export default function CommentView({
  comments,
  onSetComments,
  replyView = false,
}) {
  const [reply, setReply] = useState({});
  const [isDelete, setDelete] = useState({});
  const [isEdit, setEdit] = useState(false);
  const [editData, setEditData] = useState({});

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

  const onEdit = (data) => {
    setEdit(!isEdit);
    setEditData(data);
  };

  const submitEdit = (data) => {
    const foundComment = comments.find((element) => element.id === data.id);
    foundComment.comment = data.comment;
    setEdit(!isEdit);
    setEditData({});
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
              isEdit && editData.id === comment.id ? (
                <div>
                  <CommentBox
                    onSetComments={submitEdit}
                    submitType="edit"
                    editData={editData}
                  />
                </div>
              ) : (
                <>
                  <div className="comment">{comment.comment}</div>
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
                  <Button
                    type={"button"}
                    children={"Edit"}
                    onClick={() => onEdit(comment)}
                    className={"comment-view-button edit-button"}
                  />
                  {isDelete.id === comment.id ? (
                    <DeleteBox
                      onDelete={onDelete}
                      onRemove={onRemove}
                      comment={comment}
                      index={index}
                      replyView={replyView}
                    />
                  ) : null}
                  <HumanReadableTimeFormat time={comment.commentTime} />
                </>
              )
            ) : (
              <>
                <span className="deleted-comment">Deleted</span>
              </>
            )}

            {reply.id === comment.id ? (
              <div className={`${"comment-reply"}`}>
                <CommentBox onSetComments={submitReply} submitType="reply" />
              </div>
            ) : null}
            {comment?.children.length ? (
              <CommentView comments={comment.children} replyView={true} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
