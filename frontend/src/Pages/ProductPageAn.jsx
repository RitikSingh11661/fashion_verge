import { React, useEffect, useState, useContext } from 'react';
import { Grid,GridItem,Text,Image,Heading,Button,Input,Spinner,Select, Flex, Box, Center, SimpleGrid, Stack } from '@chakra-ui/react';
import { Link , useNavigate , useSearchParams } from 'react-router-dom';
import { authState } from './../ContextProv/AuthContextProv';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import {Link as Goto} from 'react-router-dom'

function getVal(val){
    let pages=+val
     if(typeof(pages)!=='number'){
       pages=1
    } if(pages<=0){
       pages=1
    } if(!pages){
       pages=1
    }
  return pages 
}

const getUrl=(url,sort,orderBy,search)=>{
      
    if(sort && orderBy){
        return (url=`${url}&_sort=${sort}&_order=${orderBy}`)
    }
    if(search){
        return (url=`${url}&q=${search}`)
    }
    return url;
}

function ProductPageAn(){
    const {setCartItemCont,setWishData} = useContext(authState);
    const [data,setData] = useState([]) ;
    console.log('dataAfter:', data)
    const [loading,setLoading]=useState(false) ;
    let [searchParam,setSearchParam] = useSearchParams()
    const pageNum=getVal(searchParam.get('page')) ;
    const [page,setPage] = useState(pageNum) ;
    const [orderBy,setOrderBy] = useState('') ;
    const sort="price" ;
    const [cart,setCart] = useState([]) ;
    const [cartItem,setCartItem] = useState([]) ;

    // For Wish List
    setWishData(cart)

    // For Cart
    setCartItemCont(cartItem);

    const [searchQuery,setSearchQuery] =useState('')

// Fetching data from Json Server
   const fetchdata = async(url)=>{
        try {
            setLoading(true);
            const final = await fetch(url)
            let res = await final.json();
            console.log('res',res)
            setData(res.msg);
            console.log('res.data:', res)
            setLoading(false)            
           } catch (error) {
            console.log('error:', error)
        }
    }

    const handleAddCart=(item)=>{
        console.log('item:', item)
        let exist = false;
        const updatedCart = cartItem.map((cart)=>{
           if(cart._id === item._id){
               exist = true;
               return {...cart, count:cart.count+1}
           }
           return cart
        });
       
        if(!exist){
        setCartItem([...updatedCart,{...item, count:1}]);
        } else {
        setCartItem(updatedCart)
        }
    }

const handleWish=(item)=>{
 let exist = false;
 const updatedWish = cart.map((wish)=>{
    if(wish._id === item._id){
        exist = true;
        return {...wish, count:wish.count+1}
    }
    return wish
     });

   if(!exist){
    setCart([...updatedWish,{...item,count:1}]);
    } else {
    setCart(updatedWish)
    }
}

    useEffect(()=>{
        let apiUrl = getUrl(`${process.env.REACT_APP_API_AI}/products`,sort,orderBy,searchQuery)
     fetchdata(apiUrl)
    },[page,orderBy,searchQuery])

    
const handlePageChange=(val)=>{
        const final= page+val
        setPage(final)
    }

    const [s,setS] = useState('')
    console.log('s:', s)

    const handleChange=(e)=>{
        setS(e.target.value)
    }

    const handleSearch=()=>{
        setSearchQuery(s);
    }

    useEffect(()=>{
        let objPar= {page}
        if(orderBy){
            objPar.orderBy=orderBy
        }else if (searchQuery){
            objPar.q=searchQuery
        }
        setSearchParam(objPar);
    },[page,orderBy,searchQuery])

    return loading ? (<Spinner thickness='5px' speed='0.75s' emptyColor='gray.200' color='blue.500' width={'250px'}
        height='250px' />) : (<div gap='10px'>
        <br />
        <Heading fontSize={'24px'} color='teal'>Welcome To Mens Page</Heading>   
        <br />
        <Center >
        <SimpleGrid columns={[1,1,1,2,2]} gap='10%' justifyContent='space-between' width='80%'>
        <Stack width={'75%'} direction={['column','column','row','row']}>
        <Input variant='outline'placeholder='Search' value={s} onChange={handleChange} />
        <Button onClick={handleSearch}>Enter</Button>
        </Stack>
        <Stack width={'100%'} direction={['column','column','row','row']}>
        <Button onClick={()=>{setOrderBy('asc') ; setPage(1)}} >Sorting Low to High</Button>
        <Button onClick={()=>{setOrderBy('desc') ; setPage(1)}} >Sorting High to Low</Button>
        <Button onClick={()=>{setOrderBy('');setPage(1)}}>Reset Page</Button>
        <br />
        </Stack>
        </SimpleGrid>
        </Center>


        <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={6} padding='3% 10% 3% 10%'>
        {data?.map((el)=>( 
           <GridItem boxShadow= 'rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius={'25px'} key={el.id} padding='10px'>
            <Goto to={`/products/${el._id}`} ><Image src={el.image} borderTopRadius={'25px'} height={'250px'} width='100%' /></Goto>
            <Heading noOfLines={1} fontSize={'18px'}>{el.name}</Heading> 
            <br />
            <hr />
            <Heading noOfLines={1} fontSize={'18px'}>Rs.{el.price}.00</Heading> 
            <Grid templateColumns='repeat(2, 1fr)' gap={'100px'} padding='5%'>
            <Button onClick={()=>handleAddCart(el)} color='black' bg='red.400' fontSize={20}><FaCartPlus/></Button>
            <Button onClick={()=>handleWish(el)} color='black' bg='red.400' fontSize={20}><FaHeart/></Button>
            </Grid>
           </GridItem>
        ))}
        </Grid >
        <Button isDisabled={page===1} onClick={()=>handlePageChange(-1)}>Prev</Button>
        <Button isDisabled={true} border='2px' borderColor='green.500'>{page}</Button>
        <Button onClick={()=>handlePageChange(1)}>Next</Button>
        </div>)
}

export default ProductPageAn
