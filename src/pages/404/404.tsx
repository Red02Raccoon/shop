import { Button, Result } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/');
    };

    return (
        <Result
            className="my-auto"
            status="404"
            title="404"
            subTitle={<FormattedMessage id="tr_404Description" />}
            extra={
                <Button type="primary" onClick={handleBackHome}>
                    <FormattedMessage id="tr_backHome" />
                </Button>
            }
        />
    );
};

export default PageNotFound;
