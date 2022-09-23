import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Checkbox,
  Button
} from "@chakra-ui/react";
const details = () => {
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl"> Your details </Heading>
        <Text> If you already have an account, click here to log in.</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel> First Name </FormLabel>
            <Input placeholder=" Hira " />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel> Last Name </FormLabel>
            <Input placeholder=" Khan " />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel> Address </FormLabel>
            <Input placeholder=" Sunset Blvd Rd, Phase 2 D.H.A  " />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel> City </FormLabel>
            <Input placeholder=" Karachi " />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel> Country </FormLabel>
            <select>
             <option value="usa"> United States of America</option>
             <option value="pak"> Pakistan</option>
             <option value="uae"> United Arab Emirates </option>
             <option value="de"> Germany</option>

            </select>
          </FormControl>
        </GridItem>
            <GridItem colSpan={2}>
              <Checkbox defaultChecked> Ship to billing address </Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
             <Button size="lg" w="full"> Place Order </Button>
            </GridItem>
            
      </SimpleGrid>
      
    </VStack>
  );
};
export default details;
