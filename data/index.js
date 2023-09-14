import { CodeOutlined, DesignServices, Person } from '@mui/icons-material';
import Home from './tableofteam';

export const teamsStrength = [
    {
        id: 1,
        img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg',
        name: 'Glen Maxwell',
        score: 80,
        submitted: '12/10/22-10 PM',
        grade: 'Excellent',
        isPass: true,
    },
    {
        id: 2,
        img: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg',
        name: 'Cathe Heaven',
        score: 70,
        submitted: '12/10/22-10 PM',
        grade: 'Medium',
        isPass: true,
    },
    {
        id: 3,
        img: 'https://img.freepik.com/free-photo/portrait-handsome-serious-man_23-2149022626.jpg',
        name: 'Yeader Gill',
        score: 35,
        submitted: '12/10/22-10 PM',
        grade: 'Poor',
        isPass: false,
    },
    {
        id: 4,
        img: 'https://img.freepik.com/free-photo/portrait-handsome-brunet-unshaven-adult-man-looks-with-calm-confident-expression-has-serious-look-wears-casual-jumper-poses-making-photo-against-white-background-being-hard-impress_273609-57668.jpg',
        name: 'Preth Shing',
        score: 80,
        submitted: '12/10/22-10 PM',
        grade: 'Excellent',
        isPass: true,
    },
];


export const menuteam = [
  {
    icon: <CodeOutlined />,
    title: 'Team 1',
    name: 'teamone',
    slug: '/teamone',
    info: <Home />,
  },
  {
    icon: <Person />,
    title: 'Team 2',
    name: 'teamtwo',
    slug: '/teamtwo',
    info: <Home />,
  },
  {
    icon: <DesignServices />,
    title: 'Team 3',
    name: 'teamthree',
    slug: '/teamthree',
    info: <Home />,
  },
];
