import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useGenerateId from "../../hooks/useGenerateIdHook";
import { IAddModal, ITodo } from "../../models/global.model";
import TextArea from "../reusable/forms/text-area";
import TextField from "../reusable/forms/text-field";
import ExitIcon from "../svg/exit.icon";

const AddEditModal: FC<IAddModal> = ({
  setIsEditModal,
  setIsAddModal,
  setTodos,
  todos,
  title,
  selectedId,
}) => {
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const selecteditem = todos.filter((todo) => todo.id === selectedId);
  function handleApply() {
    if (title === "Add Todo") {
      const obj: ITodo = {
        id: useGenerateId(),
        todoName: todoName,
        todoDescription: todoDescription,
        comments: [],
        isSelected: false,
        isExpanded: false,
      };
      setTodos([...todos, obj]);
    } else {
      setTodos((prev: ITodo[]) => [
        ...prev.map((item) => {
          if (item.id === selectedId) {
            return {
              ...item,
              todoName: todoName,
              todoDescription: todoDescription,
            };
          } else {
            return item;
          }
        }),
      ]);
    }

    if (setIsAddModal !== undefined) setIsAddModal(false);
    if (setIsEditModal !== undefined) setIsEditModal(false);
  }
  function validate() {
    if (todoName.length < 1) return true;
    if (todoDescription.length < 1) return true;
  }

  useEffect(() => {
    if (title !== "Add Todo") {
      setTodoName(selecteditem[0]?.todoName ? selecteditem[0]?.todoName : "");
      setTodoDescription(
        selecteditem[0]?.todoDescription ? selecteditem[0]?.todoDescription : ""
      );
    }
  }, []);

  return createPortal(
    <>
      <div
        id="staticModal"
        className="fixed bottom-0 top-0 left-0 right-0 z-40 md:inset-0 m-auto h-modal md:h-full w-full flex items-center justify-center"
      >
        <div className="bg-white mt-2 rounded w-[85vw] sm:w-[50vw] rounded-md">
          <div className="bg-tertiary h-10 flex justify-between items-center px-4 rounded-tl-md rounded-tr-md">
            <span className="text-white font-semibold">{title}</span>
            <span
              onClick={() => {
                if (setIsAddModal !== undefined) setIsAddModal(false);
                if (setIsEditModal !== undefined) setIsEditModal(false);
              }}
              className="cursor-pointer"
            >
              <ExitIcon height="12px" color="#ffffff" />
            </span>
          </div>
          <div className="w-full p-4 flex flex-col gap-4">
            <div>
              <TextField
                label="Todo Name"
                type="text"
                onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                  setTodoName(e.currentTarget.value)
                }
                defaultValue={
                  selecteditem[0]?.todoName ? selecteditem[0].todoName : ""
                }
              />
            </div>

            <div>
              <TextArea
                label="Description"
                rows={4}
                onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                  setTodoDescription(e.currentTarget.value)
                }
                defaultValue={
                  selecteditem[0]?.todoDescription
                    ? selecteditem[0].todoDescription
                    : ""
                }
              />
            </div>
            <div className="flex w-full justify-end gap-4 text-sm ">
              <button
                className="py-2 px-4 border rounded"
                onClick={() => {
                  if (setIsAddModal !== undefined) setIsAddModal(false);
                  if (setIsEditModal !== undefined) setIsEditModal(false);
                }}
              >
                Cancel
              </button>
              <button
                className={`py-2 px-4  rounded text-white ${
                  !validate() ? "bg-tertiary" : "bg-light opacity-50"
                }`}
                onClick={() => handleApply()}
                type="button"
                disabled={validate()}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-30" />
    </>,
    document.body
  );
};

export default AddEditModal;
