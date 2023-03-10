import axios from "axios";

axios.create({
  baseURL: "https://mocki.io/v1/3c1eb17d-43b9-4d6b-9588-0565a41ed86a",
});

export type IUser = {
  email: string;
  password: string;
  userId: string;
  userName: string;
};

export function validateData(
  user: IUser,
  payload: {
    userName: string;
    password: string;
  }
) {
  if (user.password === payload.password) {
    return user;
  } else {
    throw new Error("Invalid UserName or password");
  }
}

export const userLogin = async (payload: {
  userName: string;
  password: string;
}) => {
  try {
    const response = await axios.get(
      "https://mocki.io/v1/3c1eb17d-43b9-4d6b-9588-0565a41ed86a"
    );

    const user = response.data.filter(
      (user: IUser) => user.userName === payload.userName
    );
    if (user) {
      return validateData(user[0], payload);
    } else {
      throw new Error("Invalid UserName or password");
    }
  } catch (err) {
    throw new Error("Something went wrong!");
  }
};
