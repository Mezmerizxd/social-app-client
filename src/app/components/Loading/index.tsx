// Styles
import './styles.scss';

interface LoadingProps {
    loading: boolean;
    name: string;
}

const Loading = ({ loading, name }: LoadingProps) => {
    return (
        loading && (
            <div className="Loading-container" id={name} key={name}>
                <div className="loading-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    );
};

export default Loading;
