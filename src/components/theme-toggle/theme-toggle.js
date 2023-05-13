import { GlobalContext } from "@/context/global.context";
import React, { useContext } from "react";
import styled from "styled-components";

const Container = styled.div`
  /* The switch - the box around the slider */
.switch {
  display: block;
  --width-of-switch: 2.33em;
  --height-of-switch: 1.33em;
  /* size of sliding icon -- sun and moon */
  --size-of-icon: 0.93em;
  /* it is like a inline-padding of switch */
  --slider-offset: 0.2em;
  position: relative;
  width: var(--width-of-switch);
  height: var(--height-of-switch);
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f4f4f5;
  transition: .4s;
  border-radius: 30px;
  border: 1px solid black;
}

.slider:before {
  position: absolute;
  content: "";
  height: var(--size-of-icon,1.4em);
  width: var(--size-of-icon,1.4em);
  border-radius: 20px;
  left: var(--slider-offset,0.3em);
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(40deg,#ff0080,#ff8c00 70%);
  ;
 transition: .4s;
}

input:checked + .slider {
  background-color: #303136;
}

input:checked + .slider:before {
  left: calc(100% - (var(--size-of-icon,1.4em) + var(--slider-offset,0.3em)));
  background: #303136;
  /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
  box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
}
`;

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  const handleOnClick = () => {
    setTimeout(() => {
      if (theme == "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }, 100);
  };

  return (
    <Container onClick={handleOnClick}>
      <label className="switch">
        <input type="checkbox" readOnly checked={theme === "dark"} />
        <span className="slider"></span>
      </label>
    </Container>
  );
};

export default ThemeToggle;
