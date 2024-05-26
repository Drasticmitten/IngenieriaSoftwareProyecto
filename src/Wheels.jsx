import { Center, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'; // Importa los componentes necesarios de Chakra UI
import { Paper } from '@mantine/core';
import { Group } from '@mui/icons-material';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';

const Wheels = () => {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
        <h1 className='head'> Cantilever Wheels </h1>

        <Center>
          <Text className='text-secondary' fontSize={20} maxW={800} style={{ marginTop: 5, marginBottom: 0 }}>We offer a wide selection of gate hardware and supplies including Cantilever, internal truck
            trolley wheel and overhead trolley wheels for Industrial or Commercial application.  L. A.
            Ornamental & Rack Corp offers gate hardware and supplies like guide roller, latches, hinges,
            gate timers, magnetic latches, v-groove wheels, and more</Text>
        </Center>

        <h2 className='head'>Browse through our selection of hardware or supplies for all
          your fence needs</h2>

        <SimpleGrid columns={2} spacing="xl" spacingY="lg" mx={{ base: 10, sm: 100, lg: 280 }}>

          <Paper shadow="xs" p={0} borderRadius="md">
            <Group h="100%" justify="center" mx="20px" flexGrow={1}>
              <Image
                src="/wheels1.png"
                height={200}
                alt="Balcony" />
              <Stack justify='center' spacing="xs" my="lg">
                <h4 className='headish'>Cantilever Roller – 2"
                </h4>
                <Text className='text-secondary' style={{ marginTop: 0, marginBottom: 0 }} fontSize={20}>
                  Cantilever Roller – 2"
                  Square graphite
                  impregnated nylon roller is
                  UV stabilized and a full 7"
                  in diameter.
                </Text>
              </Stack>
            </Group>
          </Paper>

          <Paper shadow="xs" p={0} borderRadius="md">
            <Group h="100%" justify="center" mx="20px" flexGrow={1}>
              <Image
                src="/wheels2.png"
                height={200}
                alt="Balcony" />
              <Stack justify='center' spacing="xs" my="lg">
                <h4 className='headish'>Cantilever Roller – 2 3/8”</h4>
                <Text className='text-secondary' style={{ marginTop: 0, marginBottom: 0 }} fontSize={20}>
                  Cantilever Roller – 2 3/8” (2
                  1/2") round graphite
                  impregnated nylon roller is
                  UV stabilized and a full 7" in
                  diameter.
                </Text>
              </Stack>
            </Group>
          </Paper>

          <Paper shadow="xs" p={0} borderRadius="md">
            <Group h="100%" justify="center" mx="20px" flexGrow={1}>
              <Image
                src="/wheels3.png"
                height={200}
                alt="Balcony" />
              <Stack justify='center' spacing="xs" my="lg">
                <h4 className='headish'>Cover for the Cantilever
                  Roller</h4>
                <Text className='text-secondary' style={{ marginTop: 0, marginBottom: 0 }} fontSize={20}>
                  Cover for the Cantilever
                  Roller – Pre-installed
                  covers are included with
                  every roller saving
                  installation time and
                  insuring that you always
                  have them when you need
                  them.
                </Text>
              </Stack>
            </Group>
          </Paper>

          <Paper shadow="xs" p={0} borderRadius="md">
            <Group h="100%" justify="center" mx="20px" flexGrow={1}>
              <Image
                src="/wheels4.png"
                height={200}
                alt="Balcony" />
              <Stack justify='center' spacing="xs" my="lg">
                <h4 className='headish'>Internal Truck Assembly</h4>
                <Text className='text-secondary' style={{ marginTop: 0, marginBottom: 0 }} fontSize={20}>
                  Internal Gate Assembly
                  Receiver with Round Bolt 1
                  5/8-1 7/8" DDG R
                </Text>
              </Stack>
            </Group>
          </Paper>

        </SimpleGrid>

      </header>
      <Footer />
    </div>
  );
};

export default Wheels;
