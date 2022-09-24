import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Checkbox,
  Button,
  useBreakpointValue,
  Select,
} from "@chakra-ui/react";
const details = () => {
  const colSpan = useBreakpointValue ({base:2, md: 1})
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl"> Your details </Heading>
        <Text> If you already have an account, click here to log in.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel> First Name </FormLabel>
            <Input placeholder=" Hira " />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel> Last Name </FormLabel>
            <Input placeholder=" Khan " />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel> Address </FormLabel>
            <Input placeholder=" Sunset Blvd Rd, DHA  " />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel> City </FormLabel>
            <Input placeholder=" Karachi " />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel> Country </FormLabel>
            <Select>
             <option value="usa"> United States of America</option>
             <option value="pak"> Pakistan</option>
             <option value="uae"> United Arab Emirates </option>
             <option value="de"> Germany</option>

            </Select>
          </FormControl>
        </GridItem>
            <GridItem colSpan={2}>
              <Checkbox colorScheme={"brand"} defaultChecked> Ship to billing address </Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
             <Button colorScheme={"brand"} size="lg" w="full"> Place Order </Button>
            </GridItem>
            
      </SimpleGrid>
      
    </VStack>
  );
};
export default details;
