import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Heading,Grid ,CircularProgress, Box} from '@chakra-ui/react';
import SingleProduct from './AdminSingleProduct';
import { getProducts } from '../../Redux/App/actions';
import { Filter } from '../Filter';
import { useLocation, useSearchParams } from 'react-router-dom';

const ManageProducts = () => {
  const { isLoading, isError, products } = useSelector((store) => store.AppReducer);
  const dispatch=useDispatch(); 
  const [searchParams] = useSearchParams();
  const location = useLocation();
  
  useEffect(()=>{
    const getProductsParams = {
      params: {
          sort: searchParams.get("order") && "price",
          orderBy: searchParams.get("order") && searchParams.get("order"),
          search: searchParams.get("search") && searchParams.get("search")
      }
  };
  dispatch(getProducts(getProductsParams));
  },[location.search]);
    // console.log('Manage Products is rendering'); 

  return(
    <Box gap={'10px'}>
      <Heading size={'md'}>Manage Products</Heading>
      {isLoading && <CircularProgress isIndeterminate color='green.300' />}
      {isError && <h2>Error Occured while getting product list</h2>}
      <Filter width={'90%'} bg={'#e1f5fe'} bgInput={'#fff'} mb={'1.5vh'}/>
      <Grid ml='3.5vw' templateColumns={'repeat(4,1fr)'} gap={2} className='flexbro' templateRows={'100'}>
      {products?.length>0 && products.map(product=><SingleProduct key={product._id} product={product}/>)}
      </Grid>
      </Box>
  )
}

export default ManageProducts;
