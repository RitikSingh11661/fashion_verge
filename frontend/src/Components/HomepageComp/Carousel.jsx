import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true, arrows: false, fade: true, infinite: true, autoplay: true, speed: 500, autoplaySpeed: 5000, slidesToShow: 1, slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '30%', md: '50%' });
  const side = useBreakpointValue({ base: '5%', md: '50px' });

  // These are the images used in the slide
  const cards = ['https://i.ibb.co/1RxbKHL/Screenshot-1792.png','https://i.ibb.co/WfqTmPx/Screenshot-1793.png','https://i.ibb.co/SKY2C6G/Screenshot-1846.png'];

  return (
    <Box position={'relative'} height={['300px', '400px', '600px', '600px']} width={['100%', '100%', '100%', '100%']} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link rel="stylesheet" type="text/css" charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider width='100%' {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url,index) => <Box border={'0px solid red'} key={index} height={['200px','250px','300px','600px']} width={['10%','20%','50%']} position="relative" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${url})`} />
         )}
      </Slider>
    </Box>
  );
}