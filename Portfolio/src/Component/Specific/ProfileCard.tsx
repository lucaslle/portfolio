import {Box, Tab, Tabs} from "@mui/material";

function ProfileCard() {

    return (
        <Box>
            <Tabs
                sx={{
                    '& .MuiTab-root': {
                        color: 'white'
                    },
                    '& .Mui-selected': {
                        color: 'purple'  // Parfois il faut forcer
                    }
                }}
                variant="standard"
                aria-label="secondary tabs example"
            >
                <Tab label="Home" value="Home" />Tab label="Home" value="Home" />
                <Tab label="Project" value="Project" />
                <Tab label="Skills" value="Skills" />
                <Tab label="About Me" value="AboutMe" />
                <Tab label="Contact" value="Contact" />
            </Tabs>
        </Box>
    )
}

export default ProfileCard
