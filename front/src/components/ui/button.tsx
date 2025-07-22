interface ButtonProps {
  style: "primary" | "secondary";
}

export function ButtonStyle(style: ButtonProps["style"]) {

  let btnStyle = ``;

  if (style === "primary") {

    btnStyle = `border border-[#291C84] flex flex-row p-4 rounded-2xl items-center justify-center space-x-2 bg-[#291C84] cursor-pointer h-10 text-white font-semibold hover:bg-white hover:text-[#291C84] transition-colors`;

  } else if (style === "secondary") {

    btnStyle = `border border-black flex flex-row p-4 rounded-2xl items-center justify-center space-x-2 bg-white cursor-pointer h-10 text-black font-semibold hover:bg-black hover:text-white transition-colors`;

  }

  return btnStyle;

}

export function Button({ style }: ButtonProps) {
  return (
    <button className={ButtonStyle(style)}>
      Click me
    </button>
  );
}