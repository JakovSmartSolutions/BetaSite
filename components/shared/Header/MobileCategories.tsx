import { Category } from 'types/categories.types';
import { CloseCircle } from 'public/assets/icons/CloseCircle';
import { ExpendableCategories } from './ExpendableCategories';

interface Props {
  categories: Category[];
  close: () => void;
}

export const MobileCategories = ({ close, categories }: Props) => {
  return (
    <div className="mobileCategoriesWrapper" onClick={close}>
      <CloseCircle onClick={close} className="closeIcon" />
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <ExpendableCategories categories={categories} close={close} depth={0} />
      </div>
    </div>
  );
};
