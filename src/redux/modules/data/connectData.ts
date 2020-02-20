import { connect } from 'react-redux';
import { fetchDataActionCreators } from './actions';

function mapStateToProps({ data }: any) {
    return {
        data
    };
}

const mapDispatchToProps = fetchDataActionCreators;

export function connectData(configMapStateToProps = mapStateToProps) {
    return connect(
        configMapStateToProps,
        mapDispatchToProps,
    );
}