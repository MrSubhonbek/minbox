import { FC, MouseEventHandler } from "react";
import { VscClose } from "react-icons/vsc";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  show?: boolean;
}

export const RemoveTodo: FC<Props> = ({ onClick, show = true }) => {
  return (
    <button onClick={show ? onClick : undefined}>
      <VscClose className="fill-red-500" />
    </button>
  );
};
