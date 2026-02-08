import './App.css'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import {Box} from "@mui/material";
import LightPillar from "./component_react_bits/light_pilar/LightPillar.tsx";
import ProfileCard from "./Component/Specific/profileCard/ProfileCard.tsx";
import ProjectsSection from "./Component/Specific/ProjectCard/project.tsx";

function App() {

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ position: 'relative', minHeight: '100vh' }}>
            <Box sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }}>
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
            </Box>
            <Box sx={{ position: 'relative'}}>
                <ProfileCard/>
                <ProjectsSection/>
            </Box>
    </Box>
    </ThemeProvider>
  )
}

export default App
