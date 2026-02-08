import {Card, CardContent} from '@mui/material';
import {type ReactNode, useRef} from "react";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import EmailIcon from '@mui/icons-material/Email';

interface SpotlightCardProps {
    spotlightColor?: string;
    children?: ReactNode;
    width?: string | number;
    height?: string | number;
}

const SpotlightCard = ({
                           children,
                           width = '50vw',
    height = '80%',
                           spotlightColor = 'rgba(160, 32, 240, 0.3)',
                       }: SpotlightCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty('--mouse-x', `${x}px`);
        divRef.current.style.setProperty('--mouse-y', `${y}px`);
        divRef.current.style.setProperty('--spotlight-color', spotlightColor);
    };

    return (
        <Card
            ref={divRef}
            onMouseMove={handleMouseMove}
            sx={{
                height: {height},
                width: {width},
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(26, 26, 46, 0.3)',
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 'var(--mouse-y, 50%)',
                    left: 'var(--mouse-x, 50%)',
                    width: '400px',
                    height: '400px',
                    background: 'var(--spotlight-color)',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                },
                '&:hover::before': {
                    opacity: 1,
                },
            }}
        >
            <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                        {children}
            </CardContent>
        </Card>
    );
};

export default SpotlightCard;