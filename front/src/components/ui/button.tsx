interface ButtonProps {
  style: "primary" | "secondary";
}

export function ButtonStyle(style: ButtonProps["style"]) {

  let btnStyle = ``;

  if (style === "primary") {

    btnStyle = `border border-[#2D5CF2] flex flex-row p-4 rounded-2xl items-center justify-center space-x-2 bg-[#2D5CF2] cursor-pointer h-10 text-white font-semibold hover:bg-white hover:text-[#2D5CF2] transition-colors`;

  } else if (style === "secondary") {

    btnStyle = `border border-[#121827] flex flex-row p-4 rounded-2xl items-center justify-center space-x-2 bg-white cursor-pointer h-10 text-[#121827] font-semibold hover:bg-[#121827] hover:text-white transition-colors`;

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