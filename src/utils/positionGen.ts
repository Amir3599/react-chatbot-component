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
      return { top: 48, left: 48, bottom: undefined, right: undefined };
    case "top-right":
      return { top: 48, left: undefined, bottom: undefined, right: 48 };
    case "bottom-left":
      return { top: undefined, left: 48, bottom: 48, right: undefined };
    case "bottom-right":
      return { top: undefined, left: undefined, bottom: 48, right: 48 };
  }
};
