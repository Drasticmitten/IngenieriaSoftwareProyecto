import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import './styles/ModernBalconyRailings.css';

function PlatinumGateOpeners() {
    return (
        <div className="App">
      <Navbar />
      <header className="App-header" style={{ marginTop: '100px' }}>
      <h1 className='head'> Platinum Gate Openers </h1>
    
      <Center>
      <Text className='text-secondary'fz={20} maw={800} style={{ marginTop: 5, marginBottom:0 }}>Platinum Access Systems is proud to offer the "New Generation" of gate openers, the
perfect choice for both residential and commercial applications. Our innovative systems are
designed to provide exceptional performance, safety, and reliability for your gated entrance.</Text>
     </Center>
     
     <h2 className='head'>Our merchandise consists of</h2>
     
    <SimpleGrid cols={2} spacing="xl" verticalSpacing="lg" mx={{ base: 10, sm: 100, lg: 280 }}>
     
     <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px" grow>    
        <Image
          src="/opener1.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>The BLSL840</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      With its ultra-quiet high torque brushless DC motor is the first choice for light slide gate applications. 
      </Text>
      </Stack>
      </Group>
    </Paper>
    
    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/opener2.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>The BLSL2250</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      With its ultra-quiet high torque brushless DC motor is the first choice for medium slide gate applications.  
      </Text>
      </Stack>
      </Group>
    </Paper>
    
    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/opener3.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>The BLSL3060</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      With its ultra-quiet high
torque brushless DC motor
is the first choice for heavy
slide gate applications.    
      </Text>
      </Stack>
      </Group>
    </Paper> 

    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/opener4.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>The BLSW814</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      With its ultra-quiet high
torque brushless DC motor is
the first choice for light
swing gate applications.   
      </Text>
      </Stack>
      </Group>
    </Paper> 

    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/opener5.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>The BLSW1016</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      with its ultra-quiet high
torque brushless DC motor
is the first choice for
medium swing gate
applications.   
      </Text>
      </Stack>
      </Group>
    </Paper> 

    <Paper shadow="xs" p={0} radius="md">
     <Group h="100%" justify="center" mx="20px"  grow>    
        <Image
          src="/opener6.png"
          height={200}
          alt="Balcony"
        />
      <Stack justify='center' gap="xs" my="lg" >
      <h4 className='headish'>The BLSW2212</h4>
      <Text className='text-secondary' style={{ marginTop: 0, marginBottom:0 }} fz={20}>
      With its ultra-quiet high
torque brushless DC motor is
the first choice for light
swing gate applications. 
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

export default PlatinumGateOpeners