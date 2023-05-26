import { Button, Center, Input, SimpleGrid, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export const Filter = ({mb,bg,bgInput,width}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initOrder = searchParams.get('order');
    const [order, setOrder] = useState(initOrder || '');
    const initSearch = searchParams.get('search');
    const [search, setSearch] = useState(initSearch||'');
    const [page, setPage] = useState(1);
    
    const handleSearch = () => {
        const params = {};
        if (search) params.search=search; 
        if (order)params.order = order;
        setSearchParams(params);
    }

    const handelChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        const params = {};
        order && (params.order = order);
        search && (params.search = search);
        setSearchParams(params);
    }, [order,setSearchParams]);

    return (
        <Center mt={mb} mb={mb}>    
            <SimpleGrid columns={[1, 1, 1, 2, 2]} gap='10%' justifyContent='space-between' width={width}>
                <Stack width={'25vw'} direction={['column', 'column', 'row', 'row']}>
                    <Input variant='outline' bg={bgInput} placeholder='Search' onChange={handelChangeSearch}/>
                    <Button bg={bg} onClick={handleSearch}>Enter</Button>
                </Stack>
                <Stack width={'35vw'} direction={['column', 'column', 'row', 'row']} b>
                    <Button bg={bg} onClick={() => { setOrder('asc') }} >Sorting Low to High</Button>
                    <Button bg={bg} onClick={() => { setOrder('desc') }} >Sorting High to Low</Button>
                    <Button bg={bg} onClick={() => { setOrder(''); setSearch(''); setPage(1) }}>Reset Page</Button>
                    <br />
                </Stack>
            </SimpleGrid>
            </Center>
    )
}
