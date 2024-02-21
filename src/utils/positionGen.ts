import { PositionType } from "../types";

export const generateIconPos = (pos: PositionType) => {
  switch (pos) {
    case "top-left":
      return { top: 16, left: 16, bottom: undefined, right: undefined };
    case "top-right":
      return { top: 16, left: undefined, bottom: undefined, right: 16 };
    case "bottom-left":
      return { top: undefined, left: 16, bottom: 16, right: undefined };
    case "bottom-right":
      return { top: undefined, left: undefined, bottom: 16, right: 16 };
  }
};

export const generateContainerPos = (pos: PositionType) => {
  switch (pos) {
    case "top-left":
      return { top: 64, left: 64, bottom: undefined, right: undefined };
    case "top-right":
      return { top: 64, left: undefined, bottom: undefined, right: 64 };
    case "bottom-left":
      return { top: undefined, left: 64, bottom: 64, right: undefined };
    case "bottom-right":
      return { top: undefined, left: undefined, bottom: 64, right: 64 };
  }
};
