import { JobPostState } from "../../type";
export const initialState = {
  savedPost: [],
  totalPost: 0,
  addPost: () => [],
  removePost: () => [],
  isItemSaved: () => false,
};
export interface ProviderState {
  savedPost: JobPostState[];
  totalPost: number;
  addPost: (jobPost: JobPostState) => void;
  removePost: (jobId: string) => void;
  isItemSaved: (jobId: string) => boolean;
}
interface Action {
  type: string;
  payload: Payload;
}
type Payload = {
  savedPost: JobPostState[];
  totalPost: number;
};
const savePostReducer = (state: ProviderState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_POST":
      console.log("ADD_POST", payload);
      return {
        ...state,
        savedPost: payload.savedPost,
        totalPost: payload.totalPost,
      };
    case "REMOVE_POST":
      console.log("REMOVE_POST", payload);
      return {
        ...state,
        savedPost: payload.savedPost,
        totalPost: payload.totalPost,
      };

    default:
      throw new Error(`No case for type ${type} found`);
  }
};

export default savePostReducer;
