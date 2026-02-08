import {Avatar, Box} from "@mui/material";


const ProfilePicture = () => {
    const avatarUrl = "/path-to-avatar.png"

    return (
        <Box sx={{
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                inset: -4,
                background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                borderRadius: '24px',
                opacity: 0.5,
                filter: 'blur(20px)',
            }
        }}>
            <Avatar
                src={avatarUrl}
                alt='lucas'
                sx={{
                    width: 160,
                    height: 160,
                    borderRadius: '20px',
                    border: '2px solid rgba(139, 92, 246, 0.5)',
                    position: 'relative',
                }}
            />
        </Box>
    )
}


export default ProfilePicture