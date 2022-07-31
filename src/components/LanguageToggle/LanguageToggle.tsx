import { FormattedMessage } from 'react-intl';
import { Button, Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { defaultLocale, languages } from 'common';
import { useI18n } from 'context';

const LanguageToggle = () => {
    const { currentLanguage, updateLanguage } = useI18n();

    const handleLanguageChange: MenuProps['onClick'] = (e) => {
        if (currentLanguage === e.key) {
            return;
        }

        updateLanguage?.(e.key || defaultLocale);
    };

    return (
        <Dropdown
            className="lang-button"
            overlay={<Menu onClick={handleLanguageChange} items={languages} />}
        >
            <Button>
                <Space>
                    <>
                        <FormattedMessage id="tr_currentLanguage" />
                        <DownOutlined />
                    </>
                </Space>
            </Button>
        </Dropdown>
    );
};

export default LanguageToggle;
