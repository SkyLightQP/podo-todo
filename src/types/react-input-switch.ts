declare module 'react-input-switch' {
    interface ReactInputSwitchProps {
        readonly value?: number;
        readonly onChange?: any;
    }

    function Switch(props: ReactInputSwitchProps): JSX.Element;

    export default Switch;
}
