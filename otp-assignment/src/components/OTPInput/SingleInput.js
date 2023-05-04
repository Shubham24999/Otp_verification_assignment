import React, { memo, useRef, useLayoutEffect } from "react";

export const SingleOTPInputComponent = (props) => {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
    }
  }, [autoFocus, focus]);

  return <input ref={inputRef} {...rest} />;
};

const SingleOTPInput = memo(SingleOTPInputComponent);
export default SingleOTPInput;
