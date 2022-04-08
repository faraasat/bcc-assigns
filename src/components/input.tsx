import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import "./input.css";

import { IInput } from "./types";

const InputComponent: FC<IInput> = ({
  setIsEdit,
  setTodo,
  title,
  id,
  active,
}) => {
  const [inp, setInp] = useState("");
  const dispatch = useDispatch();

  const handleOk = () => {
    if (!id) {
      const id = uuidv4();
      dispatch(setTodo(id, inp));
    } else {
      dispatch(setTodo(id, inp, active));
    }
    setIsEdit(false);
  };

  return (
    <div className="input">
      <div className="input-card">
        <div className="input-card__inp">
          <input
            type="text"
            autoFocus={true}
            defaultValue={id ? title : inp}
            onChange={(e: any) => setInp(e.target.value)}
          />
        </div>
        <div className="input-card__btn">
          <button
            className="input-card__btn-cancel"
            onClick={() => setIsEdit(false)}
          >
            Cancel
          </button>
          <button className="input-card__btn-ok" onClick={handleOk}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
