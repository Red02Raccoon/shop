import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Tag } from 'antd';

import { ICategory, Category } from 'common';
import './Filter.scss';

const { CheckableTag } = Tag;

interface Props {
    categories: ICategory[];
    onFilterChange: (categories: Category[]) => void;
}

const Filter: React.FC<Props> = ({ categories, onFilterChange }) => {
    const [selectedTags, setSelectedTags] = useState<Category[]>([]);

    const handleChange = (tag: Category, checked: boolean) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);

        setSelectedTags(nextSelectedTags);
        onFilterChange(nextSelectedTags);
    };

    return (
        <div className="filter">
            <div className="filter__title">
                <FormattedMessage id="tr_filter" tagName="span" />:
            </div>

            {categories.map(({ id, title }) => {
                return (
                    <CheckableTag
                        key={id}
                        checked={selectedTags.indexOf(id) > -1}
                        onChange={(checked) => handleChange(id, checked)}
                    >
                        <FormattedMessage id={title} />
                    </CheckableTag>
                );
            })}
        </div>
    );
};

export default Filter;
