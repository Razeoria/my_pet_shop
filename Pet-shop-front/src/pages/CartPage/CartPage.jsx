import { usePageHeading } from "../../shared/hooks/usePageHeading";
import Container from "../../shared/components/Container/Container";
import BlockTitle from "../../shared/components/BlockTitle/BlockTitle";
import FlexBox from "../../shared/components/FlexBox/FlexBox";
import Cart from "../../modules/Cart/Cart";

const CartPage = () => {
    usePageHeading("Cart");

    return (
        <Container>
        <BlockTitle
            title="Shopping cart"
            linkTo="/categories"
            linkText="Back to the store"
        />
        <FlexBox>
            <Cart />
        </FlexBox>
        </Container>
    );
};

export default CartPage;
