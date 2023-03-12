import { FC, Fragment, useEffect, useRef, useState } from "react";
import { IComment, ITable, ITodo } from "../../../models/global.model";
import AddCommentModal from "../../modals/add-comment-modal";
import AddEditModal from "../../modals/add-edit-modal";
import DropDownIcon from "../../svg/dropdown.icon";
import KebabImage from "../../svg/kebab.icon";
import PlusIcon from "../../svg/plus-icon";

const Table: FC<ITable> = ({
  todos,
  isEditModal,
  setTodos,
  setIsEditModal,
  onDelete,
}) => {
  const menuRef = useRef<HTMLInputElement>(null);
  const [isAddComment, setIsAddComment] = useState(false);
  const [isEditComment, setIsEditComment] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [selectedComment, setSelectedComment] = useState({
    comment: "",
    id: "",
  });
  const [selectedId, setSelectedId] = useState("");
  function kebabClick(index: number) {
    setTodos((prev: ITodo[]) => [
      ...prev.map((todo, i) => {
        setSelectedId(todos[index].id);
        if (i === index) {
          return {
            ...todo,
            isSelected: !todo.isSelected,
          };
        }
        return {
          ...todo,
          isSelected: false,
        };
      }),
    ]);
  }

  function kebabExpand(index: number) {
    setTodos((prev: ITodo[]) => [
      ...prev.map((todo, i) => {
        if (i === index) {
          return {
            ...todo,
            isExpanded: !todo.isExpanded,
          };
        }
        return {
          ...todo,
          isSelected: false,
        };
      }),
    ]);
  }

  function deleteComment(id: string, i: number) {
    const comments = todos[i].comments.filter((comment) => comment.id !== id);
    setTodos((prev: ITodo[]) => [
      ...prev.map((todo) => {
        if (todo.id === todos[i].id) {
          return {
            ...todo,
            comments: comments,
          };
        } else {
          return todo;
        }
      }),
    ]);
  }

  function handleCommentEdit(elem: IComment, index: number) {
    setSelectedIndex(index);
    setSelectedId(todos[index].id);
    setSelectedComment(elem);
    setIsEditComment((prev) => !prev);
  }

  function addComments(index: number) {
    console.log(index);
    setSelectedIndex(index);
    setIsAddComment(true);
  }

  useEffect(() => {
    let handleMenu = (e: any) => {
      if (menuRef.current !== null) {
        if (!menuRef.current.contains(e.target)) {
          setTimeout(() => {
            setTodos((prev: ITodo[]) => [
              ...prev.map((item) => {
                if (item.id === selectedId) {
                  return {
                    ...item,
                    isSelected: false,
                  };
                } else {
                  return item;
                }
              }),
            ]);
          }, 150);
        }
      }
    };
    document.addEventListener("mousedown", handleMenu);
    return () => {
      document.removeEventListener("mousedown", handleMenu);
    };
  }, [selectedId]);

  return (
    <>
      <div className="w-full border mt-10 overflow-auto">
        <table className="w-full ">
          <thead className="bg-secondary text-white">
            <tr className="h-12 border-b ">
              <th colSpan={1} className="text-start pl-4 w-20">
                No
              </th>
              <th colSpan={3} className="text-start pl-4">
                Todo
              </th>
              <th colSpan={6} className="text-start pl-4">
                Description
              </th>
              <th colSpan={2} className="text-start pl-4 whitespace-nowrap">
                Date Added
              </th>
              <th colSpan={1} className="px-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item, i) => (
              <Fragment key={item.id}>
                <tr className="h-14 bg-white text-dark border-t border-b">
                  <td colSpan={1} className=" pl-4 font-semibold w-20">
                    {i + 1}
                  </td>
                  <td colSpan={3} className=" pl-4 font-semibold">
                    {item.todoName}
                  </td>
                  <td colSpan={6} className="pl-4 font-semibold">
                    {item.todoDescription}
                  </td>
                  <td
                    colSpan={2}
                    className="pl-4 font-semibold whitespace-nowrap"
                  >
                    {new Date().toDateString()}
                  </td>
                  <td colSpan={1} className="px-2 w-24 text-center relative ">
                    <div className="flex justify-center gap-4">
                      <button
                        type="button"
                        className="p-2"
                        onClick={() => kebabExpand(i)}
                      >
                        <span
                          className={`transition ease-in-out duration-500 rotate-180 ${
                            item.isExpanded ? "rotate-180" : ""
                          }`}
                        >
                          <DropDownIcon />
                        </span>
                      </button>
                      <button
                        type="button"
                        className="p-2"
                        onClick={() => kebabClick(i)}
                      >
                        <KebabImage width="5px" />
                      </button>
                    </div>
                    {item.isSelected ? (
                      <div
                        className="bg-white absolute top-0 right-10 flex flex-col rounded-sm text-sm shadow-xl z-10 "
                        ref={menuRef}
                      >
                        <button
                          className="px-4 py-1 font-semibold rounded-tl-sm rounded-tr-sm hover:bg-tertiary hover:text-white"
                          onClick={() =>
                            setIsEditModal((prev: boolean) => !prev)
                          }
                        >
                          Edit
                        </button>
                        <hr />
                        <button
                          className="px-4 py-1 font-semibold rounded-bl-sm rounded-br-sm hover:bg-tertiary hover:text-white"
                          onClick={() => onDelete(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    ) : null}
                  </td>
                </tr>
                {item.isExpanded ? (
                  <tr className="bg-[#F0F8FF]" key={item.id}>
                    {item.comments.length > 0 ? (
                      <td colSpan={13} className="px-10 ">
                        <div
                          className={`flex justify-between h-14 items-center text-sm`}
                        >
                          <p className="font-semibold">Comments</p>
                          <button
                            className="text-tertiary font-semibold  flex items-center gap-2"
                            onClick={() => addComments(i)}
                          >
                            <PlusIcon color="#002eac" height="14px" /> Add
                            Comments
                          </button>
                        </div>

                        <ol
                          style={{ listStyleType: "decimal" }}
                          className="flex flex-col gap-2"
                        >
                          <div>
                            {item.comments.map((elem, ind) => (
                              <div key={elem.id} className={`mb-2`}>
                                <hr />
                                <div className="flex justify-between items-center gap-10">
                                  <li className="ml-4 mt-2">{elem.comment}</li>
                                  <div className="flex pr-4 gap-4 font-semibold pt-1">
                                    <button
                                      className="text-sm text-red-500 hover:text-black"
                                      onClick={() => deleteComment(elem.id, i)}
                                    >
                                      delete
                                    </button>
                                    <button
                                      className="text-sm text-tertiary hover:text-black"
                                      onClick={() => handleCommentEdit(elem, i)}
                                    >
                                      edit
                                    </button>
                                  </div>
                                </div>
                                {isEditComment ? (
                                  <AddCommentModal
                                    title="Edit Comment"
                                    selectedComment={selectedComment}
                                    index={selectedIndex}
                                    todoItem={item}
                                    setIsAddComment={setIsEditComment}
                                    isAddComment={isEditComment}
                                    setTodos={setTodos}
                                    todos={todos}
                                    selectedId={selectedId}
                                  />
                                ) : null}
                              </div>
                            ))}
                            {isAddComment ? (
                              <AddCommentModal
                                title="Add Comment"
                                index={selectedIndex}
                                todoItem={item}
                                setIsAddComment={setIsAddComment}
                                isAddComment={isAddComment}
                                setTodos={setTodos}
                                todos={todos}
                                selectedId={selectedId}
                              />
                            ) : null}
                          </div>
                        </ol>
                      </td>
                    ) : (
                      <>
                        <td className="p-4" colSpan={13}>
                          <div className=" flex flex-col justify-center items-center border h-40 gap-4 ">
                            <p className="text-dark font-semibold">
                              No Commets added yet
                            </p>
                            <button
                              className="text-tertiary font-semibold  flex items-center gap-2"
                              onClick={() => addComments(i)}
                            >
                              <PlusIcon color="#002eac" height="14px" /> Add
                              Comments
                            </button>
                          </div>
                        </td>
                        {isAddComment ? (
                          <AddCommentModal
                            title="Add Comment"
                            index={selectedIndex}
                            todoItem={item}
                            setIsAddComment={setIsAddComment}
                            isAddComment={isAddComment}
                            setTodos={setTodos}
                            todos={todos}
                            selectedId={selectedId}
                          />
                        ) : null}
                      </>
                    )}
                  </tr>
                ) : null}
                {isEditModal ? (
                  <AddEditModal
                    title="Edit Todo"
                    setIsEditModal={setIsEditModal}
                    setTodos={setTodos}
                    todos={todos}
                    selectedId={selectedId}
                  />
                ) : null}
              </Fragment>
            ))}
            {todos.length === 0 ? (
              <tr className="h-10 border-b">
                <td
                  colSpan={13}
                  className="border-t border-b px-2 text-dark font-semibold h-[20rem] text-center"
                >
                  <p>No list of todos available</p>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
