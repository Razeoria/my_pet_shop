import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducer, actions } from "../../shared/state/catalogSlice";
import { loadGroups, loadGroupDetails } from "../../shared/state/catalogThunks";
import CategoryPreview from "../../features/category/CategoryPreview/CategoryPreview";
import FlexBox from "../../shared/components/FlexBox/FlexBox";

const CategoryShowcase = ({ max }) => {
    const dispatch = useDispatch();

    const categoryState = useSelector(state => state.categories);
    const { groups = [], groupsStatus, groupsError } = categoryState;

    // Загрузка при монтировании
    useEffect(() => {
        if (groupsStatus === "idle") {
        dispatch(loadGroups());
        }
    }, [groupsStatus, dispatch]);

    // Отображение состояний загрузки / ошибки
    if (groupsStatus === "loading") {
        return <div>Загрузка категорий...</div>;
    }

    if (groupsStatus === "failed") {
        return <div>Ошибка загрузки: {groupsError}</div>;
    }

    // Подготовка к отображению
    const categoriesToShow = Number.isInteger(max)
        ? groups.slice(0, max)
        : groups;

    return (
        <FlexBox>
        {categoriesToShow.map(cat => (
            <CategoryPreview key={cat.id} data={cat} />
        ))}
        </FlexBox>
    );
};

export default CategoryShowcase;




