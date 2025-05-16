import { usePageHeading } from "../../shared/hooks/usePageHeading";
import Container from "../../shared/components/Container/Container";
import Breadcrumbs from "../../modules/BreadCrumbs/BreadCrumbs";
import CategoryShowcase from "../../modules/CategoryShowcase/CategoryShowcase";
import BlockTitle from "../../shared/components/BlockTitle/BlockTitle";

const CategoriesPage = () => {
    usePageHeading("Categories");

    return (
        <Container>
        <Breadcrumbs />
        <BlockTitle title="Categories" />
        <CategoryShowcase />
        </Container>
    );
    };

export default CategoriesPage;
