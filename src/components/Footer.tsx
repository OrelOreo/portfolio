import { Box, Text, Link } from "@chakra-ui/react";

function Footer() {

  return (
    <Box>
        <Text textAlign="center">
            Conçu et développé par Aurélien Oger
        </Text>
        <Text textAlign="center">Créé avec&nbsp;
            <Link color="purple.400" variant="underline" fontWeight="bold" href="https://fr.react.dev/" target="_blank">React.js&nbsp;</Link>
                & <Link color="purple.400" variant="underline" fontWeight="bold" href="https://www.chakra-ui.com/" target="_blank">Chakra UI</Link> 
                . Hébergé sur&nbsp;
                <Link color="purple.400" variant="underline" fontWeight="bold" href="https://vercel.com/" target="_blank">Vercel</Link>
        </Text>
    </Box>
  );
}

export default Footer;
