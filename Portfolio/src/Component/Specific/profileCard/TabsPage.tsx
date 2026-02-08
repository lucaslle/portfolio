import {Tab, Tabs} from "@mui/material";


const TabsPage = () => {
    return (
<Tabs
    sx={{
        '& .MuiTab-root': {
            color: 'white'
        },
        '& .Mui-selected': {
            color: 'purple'
        }
    }}
    variant="standard"
    aria-label="secondary tabs example"
>
    <Tab label="Home" value="Home" />
    <Tab label="Project" value="Project" />
    <Tab label="Skills" value="Skills" />
    <Tab label="About Me" value="AboutMe" />
    <Tab label="Contact" value="Contact" />
</Tabs>
    )
}


export default TabsPage