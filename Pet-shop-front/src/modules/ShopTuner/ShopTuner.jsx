import DiscountToggle from "./TickControl/TickControl";
import SortMenu from "./SortMenu/SortMenu";
import BudgetFilter from "./BudgetFilter/BudgetFilter";
import FlexBox from "../../shared/components/FlexBox/FlexBox";

const ShopTuner = ({
    filters: { priceFrom, priceTo, discounted, sortBy },
    onPriceChange,
    onToggleDiscounted,
    discountedOnly = false,
    onSortChange,
    }) => {
    return (
        <FlexBox>
        <BudgetFilter
            priceFrom={priceFrom}
            priceTo={priceTo}
            onChange={(from, to) => onPriceChange({ priceFrom: from, priceTo: to })}
        />

        {!discountedOnly && (
            <DiscountToggle
            label="Only discounted"
            checked={discounted}
            onChange={checked => onToggleDiscounted({ discounted: checked })}
            />
        )}

        <SortMenu
            label="Sort by"
            value={sortBy}
            onChange={val => onSortChange({ sortBy: val })}
        />
        </FlexBox>
    );
};

export default ShopTuner;
