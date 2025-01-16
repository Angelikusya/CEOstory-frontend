import { Link } from 'react-router-dom';
import StoriesPreview from '../StoriesPreview/StoriesPreview';
import './Saved.css';
import DATA from '../Data/DataCareer'; 

import KorotkovaE from '../../assets/speaker-photoes/korotkova-tiny.webp';
import BotashovR from '../../assets/speaker-photoes/speaker-photo-main-3.webp';
import BursalidiD from '../../assets/speaker-photoes/speaker-photo-main-2.webp';
import VafeevT from '../../assets/speaker-photoes/speaker-photo-main-4.webp';

const photoMap = {
    3: BotashovR,
    1: KorotkovaE,
    2: BursalidiD,
    4: VafeevT,
};

const Saved = ({ 
    stories, 
    removeStory,
    onIncreaseView, 
    isStorySaved,
}) => {
    return (
        <main className='saved'>
            <div className='saved__stories'>
                {stories && stories.length > 0 ? (
                    stories.map((story) => (
                        <div key={story.storyId} className='saved__story'> {/* Добавляем класс здесь */}
                            <div className='saved__photo-container'>
                                <img 
                                    src={photoMap[story.storyId] || DATA.photo} // Используем photoMap для получения изображения
                                    className='saved__photo'
                                    alt={`${story.name}`} 
                                />
                            </div>
                            <div className='saved__block'>
                                <StoriesPreview
                                    key={story.storyId}
                                    storyId={story.storyId}
                                    name={story.name}
                                    type={story.type}
                                    field={story.field}
                                    income={story.income}
                                    title={story.title}
                                    navigation={story.navigation}
                                    job={story.job}
                                    textPreview1={story.textPreview1}
                                    textPreview2={story.textPreview2} 
                                    textPreview3={story.textPreview3}
                                    investments={story.investments}
                                    experience={story.experience} 
                                    publicationDate={story.publicationDate}
                                    readingTime={story.readingTime}
                                    free={story.free} 
                                    onRemove={removeStory} 
                                    onIncreaseView={onIncreaseView}
                                    isSaved={isStorySaved(story.storyId)}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='saved__container'>
                        <p className='saved__text'>У Вас нет сохраненных историй</p>
                        <p className='saved__more'>Но Вы можете найти для себя более 100
                        историй и сохранить их здесь
                        </p>
                        <Link className='saved__link button' to='/career-stories'>Перейти к историям</Link>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Saved;


