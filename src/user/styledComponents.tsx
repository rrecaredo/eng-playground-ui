import styled from 'styled-components';
import Button from 'src/components/Button';

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Slider = styled.div`
    display: flex;
    flex-direction: row;

    &:last-child {
        &.-active {
            left: -350px;
        }
    }
`;

export const Slide = styled.div`
    min-width: 350px;

    &.-active {
        opacity: 1;
        display: block;
        transition: opacity 0.3s ease-in-out;
        left: 0;
    }

    &:last-child {
        &.-active {
            position: relative;
            left: -350px;
            transition: opacity 0.3s ease-in-out;
        }
    }

    &:not(.-active) {
        opacity: 0;
        height: 0;
    }
`;

export const LoginButton = styled(Button)`
    width: 120px;
`;

export const SignupButton = styled(Button)`
    width: 120px;
`;
