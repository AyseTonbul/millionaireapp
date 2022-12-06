import React from "react";

 function Start({ setUsername }) {
  const inputRef = React.useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="isminizi giriniz"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Başlat
      </button>
    </div>
  );
}
export default Start