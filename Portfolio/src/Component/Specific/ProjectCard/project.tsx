import { Box, Typography, Chip, IconButton } from '@mui/material';
import SpotlightCard from "../../Generic/Card/Card.tsx";
// import SpotlightCard from './SpotlightCard';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LaunchIcon from '@mui/icons-material/Launch';

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image?: string;
    githubUrl?: string;
    liveUrl?: string;
}

const ProjectsSection = () => {
    // Faux projets pour l'exemple
    const projects: Project[] = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Dons quis id blandit eros eget.',
            tags: ['React', 'Node.js'],
            githubUrl: '#',
            liveUrl: '#'
        },
        {
            id: 2,
            title: 'Real-time Chat App',
            description: 'Hmo desiruny art demo rood usilond.',
            tags: ['Socket.IO', 'Express'],
            githubUrl: '#',
            liveUrl: '#'
        },
        {
            id: 3,
            title: 'Blog CMS',
            description: 'Hoor orhing oll result chol shi sossiond.',
            tags: ['Next.js', 'MongoDB'],
            githubUrl: '#',
            liveUrl: '#'
        },
        {
            id: 4,
            title: 'Task Manager',
            description: 'Organize your tasks efficiently.',
            tags: ['React', 'Firebase'],
            githubUrl: '#',
            liveUrl: '#'
        },
        {
            id: 5,
            title: 'Portfolio Website',
            description: 'Modern portfolio with animations.',
            tags: ['Three.js', 'GSAP'],
            githubUrl: '#',
            liveUrl: '#'
        },
    ];

    return (
        <SpotlightCard
            width="100%"
            height="auto"
            spotlightColor="rgba(139, 92, 246, 0.2)"
        >
            <Box>
                {/* Header */}
                <Typography
                    variant="h4"
                    sx={{
                        color: 'white',
                        fontWeight: 700,
                        mb: 4,
                        fontSize: { xs: '1.5rem', md: '2rem' }
                    }}
                >
                    PROJECTS
                </Typography>

                {/* Projects Grid with Horizontal Scroll */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 3,
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        pb: 2,
                        '&::-webkit-scrollbar': {
                            height: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '10px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'rgba(139, 92, 246, 0.5)',
                            borderRadius: '10px',
                            '&:hover': {
                                background: 'rgba(139, 92, 246, 0.7)',
                            }
                        },
                    }}
                >
                    {projects.map((project) => (
                        <Box
                            key={project.id}
                            sx={{
                                minWidth: { xs: '280px', sm: '320px', md: '350px' },
                                background: 'rgba(30, 30, 50, 0.5)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '16px',
                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                p: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    border: '1px solid rgba(139, 92, 246, 0.5)',
                                    boxShadow: '0 8px 30px rgba(139, 92, 246, 0.3)',
                                }
                            }}
                        >
                            {/* Project Image/Placeholder */}
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '180px',
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 1,
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Code snippet visual effect */}
                                <Box
                                    sx={{
                                        fontSize: '0.7rem',
                                        fontFamily: 'monospace',
                                        color: 'rgba(139, 92, 246, 0.6)',
                                        textAlign: 'left',
                                        p: 2,
                                    }}
                                >
                                    <div>{'<div className="app">'}</div>
                                    <div style={{ paddingLeft: '16px' }}>{'<Header />'}</div>
                                    <div style={{ paddingLeft: '16px' }}>{'<Main />'}</div>
                                    <div>{'</div>'}</div>
                                </Box>
                            </Box>

                            {/* Project Title */}
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '1.1rem',
                                }}
                            >
                                {project.title}
                            </Typography>

                            {/* Project Description */}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    fontSize: '0.9rem',
                                    flex: 1,
                                }}
                            >
                                {project.description}
                            </Typography>

                            {/* Tags */}
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                {project.tags.map((tag, index) => (
                                    <Chip
                                        key={index}
                                        label={tag}
                                        size="small"
                                        sx={{
                                            background: 'rgba(139, 92, 246, 0.2)',
                                            color: '#a78bfa',
                                            border: '1px solid rgba(139, 92, 246, 0.3)',
                                            fontSize: '0.75rem',
                                        }}
                                    />
                                ))}
                            </Box>

                            {/* Action Buttons */}
                            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                                <IconButton
                                    size="small"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.6)',
                                        border: '1px solid rgba(139, 92, 246, 0.3)',
                                        borderRadius: '8px',
                                        '&:hover': {
                                            color: '#8b5cf6',
                                            borderColor: '#8b5cf6',
                                            background: 'rgba(139, 92, 246, 0.1)',
                                        }
                                    }}
                                >
                                    {/*<GitHubIcon fontSize="small" />*/}
                                </IconButton>
                                <IconButton
                                    size="small"
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.6)',
                                        border: '1px solid rgba(139, 92, 246, 0.3)',
                                        borderRadius: '8px',
                                        '&:hover': {
                                            color: '#8b5cf6',
                                            borderColor: '#8b5cf6',
                                            background: 'rgba(139, 92, 246, 0.1)',
                                        }
                                    }}
                                >
                                    {/*<LaunchIcon fontSize="small" />*/}
                                </IconButton>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </SpotlightCard>
    );
};

export default ProjectsSection;