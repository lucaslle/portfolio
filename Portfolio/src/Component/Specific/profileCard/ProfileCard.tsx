import { Box} from "@mui/material";
import SpotlightCard from "../../Generic/Card/Card.tsx";
import TabsPage from "./TabsPage.tsx";
import ProfilePicture from "./ProfilePicture.tsx";
import ProfileContent from "./Profile content.tsx";

function ProfileCard() {

    return (
            <SpotlightCard
                children={
                <>
                    <Box sx={{
                        alignItems: "center",
                    }}>
                        <TabsPage/>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        gap: 4,
                        alignItems: 'center',
                        flexWrap: { xs: 'wrap', md: 'nowrap' }
                    }}>
                        <ProfilePicture/>
                        <ProfileContent/>

                    </Box>
</>
                }/>
    )
}

export default ProfileCard
