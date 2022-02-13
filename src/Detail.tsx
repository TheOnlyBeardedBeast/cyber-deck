import { styled } from "@stitches/react";
import { useAppContext } from "./Root";

const Nav = styled("nav", {
  width: "250px",
  height: "100%",
  padding: "25px",
  borderRight: "1px solid white",
});

const NavItem = styled("button", {
  width: "200px",
  outline: "none",
  border: "none",
  backgroundColor: "#EB2941",
  clipPath:
    "polygon(0 0, 0 100%,calc(100% - 25px) 100%, 100% calc(100% - 25px), 100% 0)",
  height: "125px",
  padding: "25px",
  fontSize: "20px",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  display: "flex",
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "White",
  },
});

const DetailContainer = styled("div", {
  width: "calc(100% - 100px)",
  height: "calc(100% - 100px)",
  margin: "50px",
  border: "1px solid white",
  display: "flex",
});

const Content = styled("div", {
  height: "100%",
  color: "White",
  padding: "25px",
  "&>p": {
    marginTop: "0",
  },
});

export const Detail = () => {
  const { setSelected } = useAppContext();

  return (
    <DetailContainer>
      <Nav>
        <NavItem onClick={() => setSelected(undefined)}>Back</NavItem>
      </Nav>
      <Content>
        <p>
          Paranoia biological intrusion New Yen beam biological professional
          折り紙 ヤクザ clientele jockey nerve-splicing consciousness
          psychoactive SAS. Simstim microchannel unfolding isotropic robot
          program laser-scrawled silver. Russian advanced feral grid edge
          flatline edge 茶壷. Construct circuitry gunship dermatrode link man
          factory beam virus run hologram.
        </p>
      </Content>
    </DetailContainer>
  );
};
