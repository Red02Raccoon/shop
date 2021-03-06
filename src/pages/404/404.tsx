import { Button, Result } from 'antd';
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
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary" onClick={handleBackHome}>
                    Back Home
                </Button>
            }
        />
    );
};

export default PageNotFound;
