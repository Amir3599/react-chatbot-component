import { messageType } from "../types";

export const AddMessage = (msg: messageType, setter: any) => {
  setter((prev: messageType[]) => [...prev, msg]);
};
