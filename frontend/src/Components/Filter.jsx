import { Button, Center, Input, SimpleGrid, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initOrder = searchParams.get('order');
    const [order, setOrder] = useState(initOrder || '');
    const [search,setSearch]=useState('');
    const [page,setPage] = useState(1);

    const handleSearch=()=>{

    }
  
    useEffect(() => {
      const params = {};
      order && (params.order=order)
      setSearchParams(params);
    }, [order])
    return (
        <Center >
            <SimpleGrid columns={[1, 1, 1, 2, 2]} gap='10%' justifyContent='space-between' width='80%'>
                <Stack width={'75%'} direction={['column', 'column', 'row', 'row']}>
                    <Input variant='outline' placeholder='Search' value={search} onChange={(e)=>{setSearch(e.event.value)}} />
                    <Button onClick={handleSearch}>Enter</Button>
                </Stack>
                <Stack width={'100%'} direction={['column', 'column', 'row', 'row']}>
                    <Button onClick={() => { setOrder('asc')}} >Sorting Low to High</Button>
                    <Button onClick={() => { setOrder('desc')}} >Sorting High to Low</Button>
                    <Button onClick={() => { setOrder(''); setPage(1) }}>Reset Page</Button>
                    <br />
                </Stack>
            </SimpleGrid>
        </Center>
    )
}
