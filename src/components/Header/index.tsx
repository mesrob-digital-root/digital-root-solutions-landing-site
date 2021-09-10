
import { Row} from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import {
  HeaderSection,
  ImageContainer,
  LogoContainer,
} from "./styles";

const Header = ({ t }: any) => {
  // const [visible, setVisibility] = useState(false);

  // const showDrawer = () => {
  //   setVisibility(!visible);
  // };

  // const onClose = () => {
  //   setVisibility(!visible);
  // };

  // const MenuItem = () => {
  //   const scrollTo = (id: string) => {
  //     const element = document.getElementById(id) as HTMLDivElement;
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //     setVisibility(false);
  //   };
  //   return (
  //     <>
  //       <CustomNavLinkSmall onClick={() => scrollTo("about")}>
  //         <Span>{t("About")}</Span>
  //       </CustomNavLinkSmall>
  //       <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
  //         <Span>{t("Mission")}</Span>
  //       </CustomNavLinkSmall>
  //       <CustomNavLinkSmall onClick={() => scrollTo("product")}>
  //         <Span>{t("Product")}</Span>
  //       </CustomNavLinkSmall>
  //       <CustomNavLinkSmall
  //         style={{ width: "180px" }}
  //         onClick={() => scrollTo("contact")}
  //       >
  //         <Span>
  //           <Button>{t("Contact")}</Button>
  //         </Span>
  //       </CustomNavLinkSmall>
  //     </>
  //   );
  // };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <ImageContainer alt="logo" className="logo" src="/img/logo.png"></ImageContainer>
          </LogoContainer>
          {/* <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger> */}
        </Row>
        {/* <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer> */}
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
