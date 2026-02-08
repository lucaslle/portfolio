import './App.css'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import {Box, Button} from "@mui/material";
import LightPillar from "./component_react_bits/light_pilar/LightPillar.tsx";
import SpotlightCard from "./Component/Generic/Card/Card.tsx";
import ProfileCard from "./Component/Specific/ProfileCard.tsx";

function App() {

  return (
    <ThemeProvider theme={theme}>
    <Box>
        <LightPillar
            topColor="#A1209D"
            bottomColor="#581863"
            intensity={1.0}
            rotationSpeed={0.3}
            glowAmount={0.005}
            pillarWidth={3.0}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="normal"
        />
        {/*<SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(140, 11, 151, 0.2)">*/}
        {/*    <Button>Click me</Button>*/}
        {/*</SpotlightCard>*/}
        <ProfileCard/>
    </Box>
    </ThemeProvider>
  )
}

export default App
