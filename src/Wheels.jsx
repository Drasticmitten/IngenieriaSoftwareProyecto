import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import './styles/ModernBalconyRailings.css';

function Wheels() {
    return (
        <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
      <h1 className='head'> Cantilever Wheels </h1>
    
      <Center>
      <Text className='text-secondary'fz={20} maw={800} style={{ marginTop: 5, marginBottom:0 }}>We offer a wide selection of gate hardware and supplies including Cantilever, internal truck
trolley wheel and overhead trolley wheels for Industrial or Commercial application.  L. A.
Ornamental & Rack Corp offers gate hardware and supplies like guide roller, latches, hinges,
gate timers, magnetic latches,v-groove wheels, and more</Text>
     </Center>
     
     <h2 className='head'>Browse through our selection of hardware or supplies for all
your fence needs</h2>
     
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 100, lg: 280 }}>
     
     <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px" grow>    
        <Image
          src="/wheels1.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Cantilever Roller – 2"
</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      Cantilever Roller – 2"
Square graphite
impregnated nylon roller is
UV stabilized and a full 7"
in diameter.
      </Text>
      </Stack>
      </Group>
    </Paper>
    
    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/wheels2.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Cantilever Roller – 2 3/8”</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      Cantilever Roller – 2 3/8” (2
1/2") round graphite
impregnated nylon roller is
UV stabilized and a full 7" in
diameter.
      </Text>
      </Stack>
      </Group>
    </Paper>
    
    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/wheels3.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Cover for the Cantilever
Roller</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
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

    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/wheels4.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>Internal Truck Assembly</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
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
}

export default Wheels