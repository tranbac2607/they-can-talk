import homeImages from '../data/home-images.json';

const IMAGES_PER_PAGE = 5;

export const getImages = (page) => {
    const lowerBound = (page - 1) * IMAGES_PER_PAGE;
    const upperBound = lowerBound + IMAGES_PER_PAGE - 1;
    return {
        data: homeImages.slice(lowerBound, upperBound + 1),
        totalPages: Math.ceil(homeImages.length / IMAGES_PER_PAGE)
    };
};