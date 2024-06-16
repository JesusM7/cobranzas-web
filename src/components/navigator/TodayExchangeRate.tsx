import { Box, Flex, Stack, Tag, Text } from "@chakra-ui/react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useLatestExchangeRate } from "../../hooks/useExchangeRate";

export default function TodayExchangeRate() {

    const {exchangeRate, loading} = useLatestExchangeRate()

    return  <Box
    w='100%'
    h='100%'
    display={'flex'}
    pr={'20px'}
    alignItems={'center'}
    justifyContent={'flex-end'}>
    <Stack textAlign={'center'}>
        <Text color={'white'} fontWeight={'light'}>
            {moment().locale('es').format('ddd DD MMM YYYY')}
        </Text>
        <Flex alignItems={'center'} gap='1ch'>
            <Link to="tasas">
                <Tag colorScheme='green' variant='solid' size='md'>
                    $ BCV {exchangeRate ? exchangeRate.rate : '...'}
                </Tag>
            </Link>
        </Flex>
    </Stack>
</Box>
}