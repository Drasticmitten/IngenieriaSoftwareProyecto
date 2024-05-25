import { Button, SimpleGrid, Stack, Table, Text } from '@mantine/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import './styles/ModernBalconyRailings.css';

function Details() {
  const priceOptions = [
    { option: 'Standard', price: '$500' },
    { option: 'Deluxe', price: '$750' },
    { option: 'Premium', price: '$1000' },
  ];  
  return (
    <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '20px' }}>
        <SimpleGrid cols={2} mx="lg" my="lg">
            <Stack>
              <h1 className="headish test">Custom Aluminum Gate</h1>
              <spline-viewer style={{ width: "700px" }} url="https://prod.spline.design/NVIW-8vEoy3fqeGu/scene.splinecode"></spline-viewer>
              <Text ta="left">
                Driveway gates are the first defense that your home has against unwanted intruders. This Driveway gates with a Island Thyme is Custom made according to
                the wishes of a home owner. A Metal Security Driveway Gates Don't have to take away from the beauty of your main home Entrance we can Custom make the
                gate to compliment you home Entry. Security Driveway Gates are often the cause of many a foiled robbery plans. Driveway security gates are the best
                resource available to protect your property and Safety of your family. The Metal Gate can be made Swing Or Sliding.
              </Text>
            </Stack>
        
            <Stack>
              <h2 className="head">Buying Options</h2>
              <Table>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Option</Table.Th>
                    <Table.Th>Price</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {priceOptions.map((option, index) => (
                    <Table.Tr key={index}>
                      <Table.Td>{option.option}</Table.Td>
                      <Table.Td>{option.price}</Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
                <Button component="a"
      href="/Contact-Us">Contact Us</Button>
            </Stack>
          </SimpleGrid>
      </header>
      <Footer />
    </div>
  );
}

export default Details