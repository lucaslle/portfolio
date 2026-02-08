import {Box, Typography} from "@mui/material";

const ProfileContent = () => {
    return (
        <Box sx={{ flex: 1 }}>
            <Typography
                variant="h3"
                sx={{
                    color: 'white',
                    fontWeight: 700,
                    mb: 1,
                    fontSize: { xs: '1.75rem', md: '2.5rem' }
                }}
            >
                Hi, I'm Lucas, a
            </Typography>
            <Typography
                variant="h3"
                sx={{
                    color: 'white',
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '1.75rem', md: '2.5rem' }
                }}
            >
                Front End Developer
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: 3,
                    fontSize: '1rem'
                }}
            >
                Crafting digital experiences with clean code.
            </Typography>
            {/*<Button*/}
            {/*    variant="contained"*/}
            {/*    sx={{*/}
            {/*        background: 'linear-gradient(90deg, #8b5cf6 0%, #a855f7 100%)',*/}
            {/*        color: 'white',*/}
            {/*        px: 4,*/}
            {/*        py: 1.5,*/}
            {/*        borderRadius: '12px',*/}
            {/*        textTransform: 'none',*/}
            {/*        fontSize: '1rem',*/}
            {/*        fontWeight: 600,*/}
            {/*        boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)',*/}
            {/*        '&:hover': {*/}
            {/*            background: 'linear-gradient(90deg, #7c3aed 0%, #9333ea 100%)',*/}
            {/*            boxShadow: '0 6px 30px rgba(139, 92, 246, 0.6)',*/}
            {/*        }*/}
            {/*    }}*/}
            {/*>*/}
            {/*    VIEW MY WORK*/}
            {/*</Button>*/}
        </Box>
    )
}

export default ProfileContent;