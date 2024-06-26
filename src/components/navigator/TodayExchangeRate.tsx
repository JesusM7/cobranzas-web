import { Box, Button, ButtonGroup, Flex, Icon, IconButton, Stack, Text } from "@chakra-ui/react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useLatestExchangeRate, useRefreshExchangeRate } from "../../hooks/useExchangeRate";
import { MdRefresh } from "react-icons/md";

export default function TodayExchangeRate() {

    const { exchangeRate, setExchangeRate } = useLatestExchangeRate()
    const { fetchExchangeRate, loading: refreshLoading } = useRefreshExchangeRate(setExchangeRate)

    return <Box
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
                <ButtonGroup size='xs' isAttached variant={'solid'}>
                    <Button colorScheme='green'>
                        <Link to="tasas">
                            $ BCV {exchangeRate ? exchangeRate.rate.toString() : '...'}
                        </Link>
                    </Button>
                    <IconButton isLoading={refreshLoading} onClick={() => fetchExchangeRate()} aria-label="refresh" icon={<Icon as={MdRefresh} />} />
                </ButtonGroup>
            </Flex>
        </Stack>
    </Box >
}