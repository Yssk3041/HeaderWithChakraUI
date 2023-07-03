import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import bgImgMobile from './../images/small-bici2.jpg'
import bgImage from './../images/bici3.jpg'


function Header() {

  return (
    <Box
      h="40vh"
      bgImage= {[`url(${bgImgMobile})`, null, `url(${bgImage})`]}
      bgRepeat='no-repeat'
      bgSize='cover'
      opacity='0.6'
    >
      
    <Flex
      direction='column'
      alignItems='center'
      justify="center"
      h="100%"
      p={['0 15%', null, '0 20%']}
    >
      <Heading
      variant='banner'>
        DOMINA EL TERRENO
      </Heading>
      <Stack
        direction={{base: 'column', md:'row'}}
        spacing={['20px',null,'40px']}
        mt={['5px', null, '10px']}
        w={['100%', null, 'auto']}
      >
        <Button
          variant='outline'
          size='lg'
        >
          VER DETALLES</Button>
        <Button
          variant='outline'
          size='lg'
        >VER VIDEO</Button>
      </Stack>
    </Flex>
    </Box>
  );
}

export default Header;
