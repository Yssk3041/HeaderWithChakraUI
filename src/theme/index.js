import { extendTheme } from "@chakra-ui/react";

const FontFamily={
    heading: 'sans-serif',
    body:'sans-serif',
    button:'sans-serif'
}

const Button={
    variants: {
        outline:{
            borderRadius:'0',
            textTransform: 'uppercase',
            fontWeigth:'light',
            letterSpacing:'1px',
            color:'white',
            fontSize:'sm',
            _hover:{
                color:'black',
                bg:'white',
                fontWeigth:'light',
            }
        }
    }
}

const Heading={
    variants: {
        banner:{
            as:'h1',
            fontWeight:'light',
            textTransform: 'uppercase',
            letterSpacing:'1px',
            color:'white'
        }
    }

}

export const theme = extendTheme({FontFamily, components:{
    Button, Heading
}})