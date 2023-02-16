import React, { useState } from "react";
import CommentBox from "../../components/CommentBox/CommentBox";
import CommentView from "../../components/CommentView/CommentView";
import { CommentsLists } from "../../dataFormat/commentsData";
import { Comment } from "../../dataFormat/inputData";
import "./Commnets.scss";

const data = [
  new Comment(
    "COMMENT-1676120878491",
    "Level - 1",
    [],
    "2023-02-11T13:07:58.492Z"
  ),
  {
    id: "COMMENT-1676120878492",
    comment: "Level - 1",
    children: [
      {
        id: "REPLY-1676121394917",
        comment: "Level - 2 ",
        children: [
          {
            id: "REPLY-1676129027334",
            comment: "Level -3",
            children: [],
            commentTime: "2023-02-11T15:23:47.334Z",
          },
          {
            id: "REPLY-1676129050599",
            comment: "Level -3",
            children: [],
            commentTime: "2023-02-11T15:24:10.599Z",
          },
        ],
        commentTime: "2023-02-11T13:16:34.917Z",
      },
    ],
    commentTime: "2023-02-11T13:07:58.492Z",
  },
  {
    id: "COMMENT-1676120918556",
    comment: "Level - 1",
    children: [
      {
        id: "REPLY-1676129065037",
        comment: "Leve - 2",
        children: [
          {
            id: "REPLY-1676129075845",
            comment: "Leve - 3",
            children: [
              {
                id: "REPLY-1676129088003",
                comment: "Leve - 4",
                children: [
                  {
                    id: "REPLY-1676129132087",
                    comment: "Leve - 5",
                    children: [],
                    commentTime: "2023-02-11T15:25:32.087Z",
                  },
                  {
                    id: "REPLY-1676129142001",
                    comment: "Leve - 5",
                    children: [],
                    commentTime: "2023-02-11T15:25:42.001Z",
                  },
                ],
                commentTime: "2023-02-11T15:24:48.003Z",
              },
              {
                id: "REPLY-1676129095736",
                comment: "Leve - 4",
                children: [],
                commentTime: "2023-02-11T15:24:55.736Z",
              },
            ],
            commentTime: "2023-02-11T15:24:35.845Z",
          },
        ],
        commentTime: "2023-02-11T15:24:25.037Z",
      },
      {
        id: "REPLY-1676129071895",
        comment: "Leve - 2",
        children: [],
        commentTime: "2023-02-11T15:24:31.895Z",
      },
      {
        id: "REPLY-1676129079123",
        comment: "Leve - 2",
        children: [],
        commentTime: "2023-02-11T15:24:39.123Z",
      },
    ],
    commentTime: "2023-02-11T13:08:38.556Z",
  },
  {
    id: "COMMENT-1676122854098",
    comment: "New",
    children: [],
    commentTime: "2023-02-11T13:40:54.098Z",
  },
  {
    id: "COMMENT-1676122899190",
    comment: "das",
    children: [],
    commentTime: "2023-02-11T13:41:39.190Z",
  },
  {
    id: "COMMENT-1676122991515",
    comment:
      "Create a component in React that takes time as input and returns a string representing the time in the human-readable format like “just now”, “a few secs ago”, “a minute ago”, Create a component in React that takes time as input and returns a string representing the time in the human-readable format like “just now”, “a few secs ago”, “a minute ago”, “10 mins ago”, etc.",
    children: [],
    commentTime: "2023-02-11T13:43:11.515Z",
  },
  {
    id: "COMMENT-1676123006204",
    comment:
      "Create a component in React that takes time as input and returns a string representing the time in the human-readable format like “just now”, “a few secs ago”, “a minute ago”, “10 mins ago”, etc. Create a component in React that takes time as input and returns a string representing the time in the human-readable format like “just now”, “a few secs ago”, “a minute ago”, “10 mins ago”, etc.",
    children: [
      {
        id: "REPLY-1676128906531",
        comment: "Level - 2",
        children: [],
        commentTime: "2023-02-11T15:21:46.532Z",
      },
    ],
    commentTime: "2023-02-11T13:43:26.204Z",
  },
  {
    id: "COMMENT-1676128740762",
    comment: "Test 1",
    children: [],
    commentTime: "2023-02-11T15:19:00.762Z",
  },
  {
    id: "COMMENT-1676129220050",
    comment: "Level - 1",
    children: [],
    commentTime: "2023-02-11T15:27:00.050Z",
  },
];

export default function Commnets() {
  const lists = new CommentsLists(data);
  const [comments, setComments] = useState(lists.comments);

  console.log("comments--->", comments);
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
