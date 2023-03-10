export type IconProps = {
  width?: string;
  height?: string;
  color?: string | null;
};

export type ITodo = {
  id: string;
  todoName: string;
  todoDescription: string;
  comments: IComment[];
  isSelected: boolean;
  isExpanded: boolean;
};

export type IComment = {
  id: string;
  comment: string;
};

export type ITextArea = {
  label: string;
  rows: number;
  defaultValue: string;
  onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void;
};

export type ITable = {
  todos: ITodo[];
  isEditModal: boolean;
  setTodos: (val: any) => void;
  setIsEditModal: (val: any) => void;
  onDelete: (index: string) => void;
};

export interface iTextField {
  type: string;
  label: string;
  defaultValue: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export type IAddModal = {
  setIsEditModal?: (val: boolean) => void;
  setIsAddModal?: (val: boolean) => void;
  setTodos: (val: any) => void;
  todos: ITodo[];
  title: string;
  selectedId?: string;
};

export type IAddComment = {
  index: number;
  todoItem: ITodo;
  title?: string;
  setIsAddComment: (val: boolean) => void;
  isAddComment: boolean;
  setTodos: (val: ITodo[]) => void;
  todos: ITodo[];
  selectedComment?: IComment;
  selectedId: string;
};

export type IFloatingLabel = {
  name: string;
  children: JSX.Element | undefined | string;
  type: string;
  label: string;
  ref: React.ForwardedRef<HTMLInputElement>;
  defaultValue?: string;
};
