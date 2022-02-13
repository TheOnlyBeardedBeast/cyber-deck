import React from "react";
import { styled } from "@stitches/react";
import { useAppContext } from "./Root";
import { motion } from "framer-motion";

const CubeContainer = styled(motion.button, {
  position: "relative",
  transformStyle: "preserve-3d",
  transform: "translateZ(-150px)",
  transition: "0.5s",
  background: "none",
  outline: "none",
  border: "none",

  "& span, & p": {
    fontSize: "12px",
    fontWeight: "bold",
    fontFamily: `"Share Tech Mono", monospace`,
    margin: 0,
    textAlign: "left",
  },

  "& p": {
    fontSize: "8px",
    marginTop: "8px",
  },

  "&, & > div": {
    width: "100%",
    height: "100%",
  },

  "& > div": {
    display: "flex",
    position: "absolute",
    top: 0,
    left: 0,
  },

  "& > .front": {
    transform: "translateZ(calc(var(--unit) / 2))",
    zIndex: 3,
    flexDirection: "column",
    padding: "10px",
  },

  "& > .back": {
    transform: "translateZ(calc(var(--unit) / -2))",
    zIndex: 1,
  },

  "& > .left": {
    zIndex: 2,
    transform: "rotateY(90deg)",
    transformOrigin: "center center",
    left: "-50%",
  },

  "& > .right": {
    zIndex: 2,
    transform: "rotateY(90deg)",
    transformOrigin: "center center",
    left: "50%",
  },

  "&:hover": {
    transform: "translateZ(-50px)",
  },

  "&:focus": {
    transform: "translateZ(-230px)",
    gridColumn: "span 2",
    gridRow: "span 2",
    "& > .front": {
      transform: "translateZ(calc(230px / 2))",
    },
    "& > .back": {
      transform: "translateZ(calc(230px / -2))",
    },
  },

  variants: {
    type: {
      normal: {
        "& > .front, & > .back": {
          backgroundColor: "rgba(255,47,84,0.11)",
          "& > *": {
            color: "#d5263c",
          },
        },

        "& > .left, & > .right": {
          backgroundColor: "rgba(255,46,90,0.06)",
        },
      },
      highlighted: {
        "& > .front": {
          backgroundColor: "rgba(255,42,66,0.46)",
          "& > *": {
            color: "#E32840",
          },
        },

        "& > .back": {
          backgroundColor: "rgba(255,42,66,0.4)",
        },

        "& > .left, & > .right": {
          backgroundColor: "rgba(255,54,80,0.23)",
        },
      },
      disabled: {
        "& > .front": {
          border: "1px solid #71192A",
          "& > *": {
            color: "#d5263c",
          },
        },
        "& > .back": {
          border: "1px solid #3F1422",
        },
        "& > .left, & > .right": {
          borderTop: "1px solid #3F1422",
          borderBottom: "1px solid #3F1422",
        },
      },
      selected: {
        "& > div": {
          backgroundColor: "#EB2941",
          "& > *": {
            color: "#000",
          },
        },
      },
    },
  },

  defaultVariants: { type: "normal" },
});

export const Cube: React.FC<{
  autoFocus?: boolean;
  type?: "normal" | "highlighted" | "disabled" | "selected";
}> = ({ autoFocus, children, type }) => {
  const [focused, setFocused] = React.useState(false);
  const { setSelected } = useAppContext();

  return (
    <CubeContainer
      type={type as any}
      autoFocus={autoFocus}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      tabIndex={0}
      onDoubleClick={() => setSelected(children as string)}
    >
      <div className="back"></div>
      <div className="left"></div>
      <div className="right"></div>
      <div className="top"></div>
      <div className="front">
        {children && (
          <>
            <span>{children}</span>
            <p>
              NODE
              <br />
              STATUS
              <br />
              100%
            </p>
          </>
        )}
      </div>
    </CubeContainer>
  );
};
