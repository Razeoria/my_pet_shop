import { usePageHeading } from "../../shared/hooks/usePageHeading";
import { useQueryFilters } from '../../shared/hooks/useQueryFilters';
import ShopTuner from "../../modules/ShopTuner/ShopTuner";
import ItemsShowroom from "../../modules/ItemsShowroom/ItemsShowroom";
import Container from "../../shared/components/Container/Container";
import BlockTitle from "../../shared/components/BlockTitle/BlockTitle";
import Breadcrumbs from "../../modules/BreadCrumbs/BreadCrumbs";

const AllProductsPage = () => {
    usePageHeading('All Products');

    const { filters, setFilters } = useQueryFilters({
        priceFrom: 0,
        priceTo: Infinity,
        discounted: false,
        sortBy: 'default',
    });

    return (
        <Container>
            <Breadcrumbs />
            <BlockTitle title="All products" />
            <ShopTuner
                filters={filters}
                onPriceChange={setFilters}
                onToggleDiscounted={setFilters}
                onSortChange={setFilters}
            />
            <ItemsShowroom filters={filters} />
        </Container>
    );
};

export default AllProductsPage;
