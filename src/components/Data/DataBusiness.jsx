import BotashovR from '../../assets/speaker-photoes/speaker-photo-main-3.webp';
import VafeevT from '../../assets/speaker-photoes/speaker-photo-main-4.webp';

// ПРОСТАВЛЯЙ НОМЕР ID ПО ПОРЯДКУ, ВКЛЮЧАЯ ВСЕ ИСТОРИИ!! ДАЖЕ БИЗНЕС
const DATABusiness = [
    { 
        storyId: 3, 
        name: 'Петр Иванов', 
        title: 'Как построить бизнес с оборотом более 120 млн в год', 
        navigation: '/ivanovr-story',
        job: 'Бизнесмен',
        type: 'Бизнес',
        field: 'Строительство',
        income: 'от 100 млн р.', 
        textPreview1: 'Раскрытие финансовых показателей бизнеса',
        textPreview2: 'Описание основных бизнес-процессов и нюансов бизнеса',
        textPreview3: 'Советы по поиску клиентов',
        publicationDate: '2024-09-18',
        experience: '0 лет',
        free: true,
        readingTime: '24 мин.',
        investments:'1 тыс. р.',
        photo: BotashovR,
    },
    { 
        storyId: 4,
        name: 'Иванько Иванов', 
        title: 'Как сделать бизнес на WB с оборотом более 100 млн. руб. в месяц менее чем за год', 
        navigation: '/ivanovt-story',
        job: 'Бизнесмен',
        type: 'Бизнес',
        field: 'Товарный бизнес',
        income: 'от 1 млн р.',
        textPreview1: 'Раскрытие финансовых показателей бизнеса',
        textPreview2: 'Описание основных бизнес-процессов и нюансов бизнеса',
        textPreview3: 'Советы по поиску клиентов',
        publicationDate: "2024-09-25",
        experience: 'нет',
        investments:'2 млн р.',
        free: true,
        readingTime: '24 мин.',
        photo: VafeevT
    },
];

export default DATABusiness;
