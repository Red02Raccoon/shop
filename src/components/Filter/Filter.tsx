import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Tag } from 'antd';

import { ICategory, Category } from 'common';
import './Filter.scss';

const { CheckableTag } = Tag;
const allTag = 'all';

interface Props {
    categories: ICategory[];
    onFilterChange: (categories: Category[]) => void;
}

type TagType = Category | typeof allTag;

const Filter: React.FC<Props> = ({ categories, onFilterChange }) => {
    const [selectedTags, setSelectedTags] = useState<Category[]>([]);

    const handleChange = (tag: TagType, checked: boolean) => {
        if (tag === allTag) {
            setSelectedTags([]);
            onFilterChange([]);

            return;
        }

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

            <CheckableTag
                key={allTag}
                checked={!selectedTags.length}
                onChange={(checked) => handleChange(allTag, checked)}
            >
                <FormattedMessage id="tr_all" />
            </CheckableTag>

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
