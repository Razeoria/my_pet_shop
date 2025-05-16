import HeroBanner from "../../modules/HeroBanner/HeroBanner";
import { usePageHeading } from "../../shared/hooks/usePageHeading";
import Container from "../../shared/components/Container/Container";
import ItemsShowroom from "../../modules/ItemsShowroom/ItemsShowroom";
import CategoryShowcase from "../../modules/CategoryShowcase/CategoryShowcase";
import BlockTitle from "../../shared/components/BlockTitle/BlockTitle";
import DiscountFormSection from "../../modules/DiscountFormSection/DiscountFormSection";

const HomePage = () => {
    usePageHeading("Pet shop");

    return (
        <>
        <HeroBanner />

        <Container>
            <BlockTitle
            title="Categories"
            linkTo="/categories"
            linkText="All categories"
            />
            <CategoryShowcase limit={4} />
        </Container>

        <Container>
            <DiscountFormSection />
        </Container>

        <Container>
            <BlockTitle
            title="Sale"
            linkTo="/sales"
            linkText="All sales"
            />
            <ItemsShowroom limit={4} discountedOnly />
        </Container>
        </>
    );
};

export default HomePage;
