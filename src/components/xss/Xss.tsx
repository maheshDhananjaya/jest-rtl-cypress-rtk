import { useEffect, useRef } from "react";

const Xss = () => {
  const userInput = `
  <img src="x" onerror="alert('Hacked!')" />
`;

  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // const div = document.getElementById("div");
    const div = ref.current;
    if (div) {
      div.innerHTML = userInput;
    }
  }, []);

  //   return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
  //   return <div>{userInput}</div>;
  return <div id={"div"} ref={ref}></div>;
};

export default Xss;
