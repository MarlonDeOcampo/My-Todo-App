import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useGenerateId from "../../hooks/useGenerateIdHook";
import { IAddComment, ITodo } from "../../models/global.model";
import TextArea from "../reusable/forms/text-area";
import ExitIcon from "../svg/exit.icon";

const AddCommentModal: FC<IAddComment> = ({
  index,
  setIsAddComment,
  setTodos,
  todos,
  title,
  selectedComment,
  selectedId,
}) => {
  const [comment, setComment] = useState("");

  function handleApply() {
    if (title !== "Edit Comment") {
      const newComments = todos[index].comments;
      newComments.push({
        id: useGenerateId(),
        comment: comment,
      });

      const newTodos = todos.map((todo, i) => {
        if (index !== i) return todo;
        return {
          ...todo,
          comments: newComments,
        };
      });
      setTodos(newTodos);
    } else {
      const newTodo = todos.map((todo) => {
        if (selectedComment?.id) {
          if (todo.id !== selectedId) return todo;
          return {
            ...todo,
            comments: todo.comments.map((item) => {
              if (item.id !== selectedComment.id) return item;
              return {
                ...item,
                comment: comment,
              };
            }),
          };
        } else {
          return todo;
        }
      });
      setTodos(newTodo);
    }

    if (setIsAddComment !== undefined) setIsAddComment(false);
  }

  useEffect(() => {
    if (selectedComment !== undefined) {
      setComment(selectedComment.comment);
    }
  }, [selectedComment]);

  return createPortal(
    <>
      <div
        id="staticModal"
        className="fixed top-0 left-0 right-0 z-40 md:inset-0 h-modal md:h-full w-full flex items-center justify-center"
      >
        <div className="bg-white mt-2 rounded w-[90vw] sm:w-[50vw] rounded-md">
          <div className="bg-tertiary h-10 flex justify-between items-center px-4 rounded-tl-md rounded-tr-md">
            <span className="text-white font-semibold">
              <p>{title}</p>
            </span>
            <span
              onClick={() => {
                if (setIsAddComment !== undefined) setIsAddComment(false);
              }}
              className="cursor-pointer"
            >
              <ExitIcon height="12px" color="#ffffff" />
            </span>
          </div>
          <div className="w-full p-4">
            <div className="py-4">
              <TextArea
                label="Comment"
                rows={4}
                defaultValue={
                  title === "Edit Comment"
                    ? selectedComment?.comment
                      ? selectedComment?.comment
                      : ""
                    : ""
                }
                onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                  setComment(e.currentTarget.value)
                }
              />
            </div>
            <div className="flex w-full justify-end gap-4 text-sm ">
              <button
                className="py-2 px-4 border rounded"
                onClick={() => {
                  if (setIsAddComment !== undefined) setIsAddComment(false);
                }}
              >
                Cancel
              </button>
              <button
                className={`py-2 px-4  rounded text-white ${
                  comment.length > 0 ? "bg-tertiary" : "bg-light opacity-50"
                }`}
                onClick={() => handleApply()}
                type="button"
                disabled={comment.length < 1}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-5" />
    </>,
    document.body
  );
};

export default AddCommentModal;
