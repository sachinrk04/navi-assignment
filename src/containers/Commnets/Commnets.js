import React, { useState } from "react";
import CommentBox from "../../components/CommentBox/CommentBox";
import CommentView from "../../components/CommentView/CommentView";
import { CommentsLists } from "../../dataFormat/commentsData";
import { Comment } from "../../dataFormat/inputData";
import "./Commnets.scss";

const data = [
  new Comment(1, "1- Level - 1", [
    new Comment(11, "2- Level - 1", []),
    new Comment(12, "2- Level - 2", []),
  ]),
  new Comment(2, "1- Level - 2", [
    new Comment(11, "2- Level - 1", [
      new Comment(11, "2- Level - 1", []),
      new Comment(12, "2- Level - 2", []),
    ]),
    new Comment(12, "2- Level - 2", [
      new Comment(11, "2- Level - 1", []),
      new Comment(12, "2- Level - 2", [
        new Comment(11, "2- Level - 1", [
          new Comment(11, "2- Level - 1", []),
          new Comment(12, "2- Level - 2", []),
        ]),
        new Comment(12, "2- Level - 2", [
          new Comment(11, "2- Level - 1", []),
          new Comment(12, "2- Level - 2", []),
        ]),
      ]),
    ]),
  ]),
  new Comment(3, "1- Level - 3", []),
];

export default function Commnets() {
  const lists = new CommentsLists([]);
  const [comments, setComments] = useState(lists.comments);

  return (
    <div className="commnets-container">
      <CommentBox onSetComments={setComments} submitType="create" />
      {comments && comments.length ? (
        <CommentView comments={comments} onSetComments={setComments} />
      ) : (
        "No Comment"
      )}
    </div>
  );
}
