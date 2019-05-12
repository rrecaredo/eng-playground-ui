import styled from 'styled-components';
import { Button } from '@material-ui/core';
import theme from '../theme';

interface IProps {
    width?: string;
}

export default styled(Button)`
    && {
        box-shadow: none;
        border-bottom: 2px solid ${theme.palette.primary.dark};
        border-radius: 0;
        text-shadow: 1px 1px 0 ${theme.palette.primary.dark};
    }
`  as React.ComponentType<any>;
