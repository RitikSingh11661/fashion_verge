import { useEffect, useState } from 'react';
import { Grid, GridItem, Image, Heading, Button, Spinner } from '@chakra-ui/react';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { Link as Goto, useLocation, useSearchParams } from 'react-router-dom'
import { getProducts } from '../Redux/App/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Filter } from '../Components/Filter';

export const ProductsPage = () => {
    const { isLoading, products } = useSelector((store) => store.AppReducer);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const [cart, setCart] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [page, setPage] = useState(1);

    const handleAddCart = (item) => {
        let exist = false;
        const updatedCart = cartItem.map((cart) => {
            if (cart._id === item._id) {
                exist = true;
                return { ...cart, count: cart.count + 1 };
            }
            return cart;
        });

        if (!exist) setCartItem([...updatedCart, { ...item, count: 1 }]);
        else setCartItem(updatedCart);
    };

    const handleWish = (item) => {
        let exist = false;
        const updatedWish = cart.map((wish) => {
            if (wish._id === item._id) {
                exist = true;
                return { ...wish, count: wish.count + 1 };
            }
            return wish;
        });

        if (!exist) {
            setCart([...updatedWish, { ...item, count: 1 }]);
        } else {
            setCart(updatedWish);
        }
    };

    const handlePageChange = (val) => {
        setPage((prevPage) => prevPage + val);
    };

    useEffect(() => {
        const getProductsParams = {
            params: {
                sort: searchParams.get("order") && "price",
                orderBy: searchParams.get("order") && searchParams.get("order"),
                search: searchParams.get("search") && searchParams.get("search")
            }
        };
        dispatch(getProducts(getProductsParams));
    }, [location.search]);

    // const sortedProducts = [...products]; // Copy products array for sorting

    // const filteredProducts = sortedProducts.filter((product) =>
    //     product.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    return (
        isLoading ? (
            <Spinner thickness='5px' speed='0.75s' emptyColor='gray.200' color='blue.500' width={'250px'}
                height='250px' />
        ) : (
            <div gap='10px'>
                <br />
                <Heading fontSize={'24px'} color='teal'>Welcome To Mens Page</Heading>
                <br />
                <Filter />
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={6} padding='3% 10% 3% 10%'>
                    {products?.length > 0 && products.map((el) => (
                        <GridItem boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius={'25px'} key={el.id} padding='10px'>
                            <Goto to={`/products/${el._id}`} ><Image src={el.image} borderTopRadius={'25px'} height={'250px'} width='100%' /></Goto>
                            <Heading noOfLines={1} fontSize={'18px'}>{el.name}</Heading>
                            <br />
                            <hr />
                            <Heading noOfLines={1} fontSize={'18px'}>Rs.{el.price}.00</Heading>
                            <Grid templateColumns='repeat(2, 1fr)' gap={'100px'} padding='5%'>
                                <Button onClick={() => handleAddCart(el)} color='black' bg='red.400' fontSize={20}><FaCartPlus /></Button>
                                <Button onClick={() => handleWish(el)} color='black' bg='red.400' fontSize={20}><FaHeart /></Button>
                            </Grid>
                        </GridItem>
                    ))
                    }
                </Grid >
                <Button isDisabled={page === 1} onClick={() => handlePageChange(-1)}>Prev</Button>
                <Button isDisabled={true} border='2px' borderColor='green.500'>{page}</Button>
                <Button onClick={() => handlePageChange(1)}>Next</Button>
            </div>)
    );
};

