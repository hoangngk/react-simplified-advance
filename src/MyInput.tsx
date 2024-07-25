import { forwardRef, InputHTMLAttributes } from "react";

type MyInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const MyInput = forwardRef<HTMLInputElement, MyInputProps>((props, ref) => {
  const { label, ...otherProps } = props as MyInputProps;

  return (
    <label>
      {label}
      <input type="text" ref={ref} {...otherProps} />
    </label>
  );
});
export default MyInput;
