import { styled } from "@stitches/react";
import { useEffect, useRef } from "react";
import throttle from "lodash.throttle";

const Cursor = styled("span", {
  border: "2px solid #EB2941",
  width: "15px",
  height: "15px",
  position: "fixed",
  zIndex: "100",
  backgroundColor: "#090b14",
  clipPath: "polygon(0 0, 100% 0, 0 100%)",
  transition: "100ms",
  pointerEvents: "none",
});

const speed = 0.8;

export const MouseCatch = () => {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const mouseRef = useRef<MouseEvent>(null);

  const animate = () => {
    const cursorRect = cursorRef?.current?.getBoundingClientRect();

    let distX = (mouseRef?.current?.clientX ?? 0) - (cursorRect?.x ?? 0);
    let distY = (mouseRef?.current?.clientY ?? 0) - (cursorRect?.y ?? 0);

    const ballX = (cursorRect?.x ?? 0) + distX * speed;
    const ballY = (cursorRect?.y ?? 0) + distY * speed;

    if (cursorRef.current) {
      cursorRef.current.style.left = ballX - 5 + "px";
      cursorRef.current.style.top = ballY - 5 + "px";
    }

    requestAnimationFrame(animate);
  };

  const throttledUpdate = throttle((e: MouseEvent) => {
    (mouseRef.current as any) = e;
  }, 50);

  useEffect(() => {
    document.addEventListener("mousemove", throttledUpdate);
    animate();
  });

  return <Cursor ref={cursorRef} />;
};
