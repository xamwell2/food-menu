import data from '../data.js';

const filterMenuItems = (id) => {
    if (id === 'all') {
        return data.menu;
    }
    return data.menu.filter((item) => item.category === id);
};

export default filterMenuItems;