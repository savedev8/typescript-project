import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'> // Omit для исключения какого-то свойства, например direction из FlexProps

export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return (
        <Flex {...props} direction="column" align={align} />
    );
};
