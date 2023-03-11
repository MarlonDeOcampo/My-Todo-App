import { FC, useState } from "react";
import AddEditModal from "../componets/modals/add-edit-modal";
import Table from "../componets/reusable/forms/table";
import { ITodo } from "../models/global.model";

const Home: FC = () => {
  const [isAddModal, setIsAddModal] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState(false);

  const [todos, setTodos] = useState<ITodo[]>([]);

  function onDelete(id: string) {
    const arr = todos.filter((item) => item.id !== id);
    setTodos(arr);
  }

  return (
    <div className="pt-20">
      <div className="flex justify-between">
        <div className="text-3xl font-bold">Todos</div>
        <button
          className="px-4 py-2 bg-secondary rounded-md text-white font-semibold"
          onClick={() => setIsAddModal((prev) => !prev)}
        >
          Add Todo
        </button>
      </div>
      <div className="mt-4 border-b-2" />
      <Table
        todos={todos}
        setTodos={setTodos}
        setIsEditModal={setIsEditModal}
        isEditModal={isEditModal}
        onDelete={onDelete}
      />
      {isAddModal ? (
        <AddEditModal
          title="Add Todo"
          setIsAddModal={setIsAddModal}
          setTodos={setTodos}
          todos={todos}
        />
      ) : null}
    </div>
  );
};

export default Home;
