
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles.ts";

const Footer = () => {
return (
	<Box>
        <Container>
            <Row>
            <Column>
                <Heading>About Us</Heading>
                <FooterLink href="#">Aim</FooterLink>
                <FooterLink href="#">Vision</FooterLink>
            </Column>
            <Column>
                <Heading>Services</Heading>
                <FooterLink href="#">Writing</FooterLink>
            </Column>
            <Column>
                <Heading>Contact Us</Heading>
                <FooterLink href="#">Uttar Pradesh</FooterLink>
                <FooterLink href="#">Ahemdabad</FooterLink>
                <FooterLink href="#">Indore</FooterLink>
                <FooterLink href="#">Mumbai</FooterLink>
            </Column>
            <Column>
                <Heading>Social Media</Heading>
                <FooterLink href="#">
                <i className="fab fa-facebook-f">
                    <span style={{ marginLeft: "10px" }}>
                    Facebook
                    </span>
                </i>
                </FooterLink>
            </Column>
            </Row>
        </Container>
	</Box>
);
};
export default Footer;
