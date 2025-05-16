import { usePageHeading } from "../../shared/hooks/usePageHeading";
import ItemsShowroom from "../../modules/ItemsShowroom/ItemsShowroom";
import { useQueryFilters } from "../../shared/hooks/useQueryFilters";
import Container from "../../shared/components/Container/Container";
import BlockTitle from "../../shared/components/BlockTitle/BlockTitle";
import Breadcrumbs from "../../modules/BreadCrumbs/BreadCrumbs";
import ShopTuner from "../../modules/ShopTuner/ShopTuner";

const SpecialOffersPage = () => {
    usePageHeading('Discount');
    const { filters, setFilters } = useQueryFilters({
        priceFrom: 0,
        priceTo: Infinity,
        discounted: false,
        sortBy: "default",
    });

    return (
        <Container>
            <Breadcrumbs />
            <BlockTitle title="Discounted items" />
            <ShopTuner
                filters={filters}
                discountedOnly={true}
                onPriceChange={u => setFilters(u)}
                onToggleDiscounted={u => setFilters(u)}
                onSortChange={u => setFilters(u)}
            />
            <ItemsShowroom discountedOnly={true} filters={filters} />
        </Container>
    );
};

export default SpecialOffersPage;
