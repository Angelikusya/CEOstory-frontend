import KorotkovaE from '../../assets/speaker-photoes/korotkova-tiny.webp';
import BursalidiD from '../../assets/speaker-photoes/speaker-photo-main-2.webp';


// ПРОСТАВЛЯЙ НОМЕР ID ПО ПОРЯДКУ, ВКЛЮЧАЯ ВСЕ ИСТОРИИ!! ДАЖЕ БИЗНЕС
const DATACareer = [
    {
        storyId: 1, 
        name: 'Екатерина Короткова', 
        title: 'Как стать операционным директором в 28 лет', 
        navigation: '/korotkovae-story',
        job: 'Топ-менеджер',
        type: 'Карьера',
        field: 'Менеджмент',
        income: 'NDA',
        textPreview1: 'Советы для роста в карьере',
        textPreview2: 'Примеры проектов для реализации в работе',
        textPreview3: 'Описание софт и хард-скиллов',
        publicationDate: "2024-12-12", 
        experience: '9 лет',
        free: false,
        readingTime: '24 мин.',
        investments:'нет',
        photo: KorotkovaE
    },
    {
        storyId: 2, 
        name: 'Дмитрий Иванов', 
        title: 'Как стать директором по продукту в крупной компании в 50 лет', 
        navigation: '/korotkovae-story',
        job: 'Топ-менеджер',
        type: 'Карьера',
        field: 'IT',
        income: 'NDA',
        textPreview1: 'Советы для роста в карьере',
        textPreview2: 'Примеры проектов для реализации в работе',
        textPreview3: 'Описание софт и хард-скиллов',
        publicationDate: "2024-06-19", 
        experience: '3 года',
        free: false,
        readingTime: '24 мин.',
        investments:'нет',
        photo: BursalidiD
    },
];

export default DATACareer;
