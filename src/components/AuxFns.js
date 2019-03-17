export const FilterOptions = (entity) => {
    switch (entity) {
        case 'films':
            return [
                {key: 'episode_id equal', text: 'Episode = ', value: 'episode_id equal'},
                {key: 'episode_id less', text: 'Episode < ', value: 'episode_id less'},
                {key: 'episode_id more', text: 'Episode > ', value: 'episode_id more'},
                {key: 'director', text: 'Director', value: 'director'},
            ];
        case 'people':
            return [
                {key: 'height equal', text: 'Height = ', value: 'height equal'},
                {key: 'height less', text: 'Height < ', value: 'height less'},
                {key: 'height more', text: 'Height > ', value: 'height more'},
                {key: 'mass equal', text: 'Mass = ', value: 'mass equal'},
                {key: 'mass less', text: 'Mass < ', value: 'mass less'},
                {key: 'mass more', text: 'Mass > ', value: 'mass more'},
            ];
        default:
            return [
                {key: 'MGLT equal', text: 'MGLT = ', value: 'MGLT equal'},
                {key: 'MGLT less', text: 'MGLT < ', value: 'MGLT less'},
                {key: 'MGLT more', text: 'MGLT > ', value: 'MGLT more'},
                {key: 'length equal', text: 'Length = ', value: 'length equal'},
                {key: 'length less', text: 'Length < ', value: 'length less'},
                {key: 'length more', text: 'Length > ', value: 'length more'},
            ];
    }
};

export const defaultFilterField = (entity) => {
    switch (entity) {
        case 'films':
            return 'director';
        case 'people':
            return 'height equal';
        default:
            return 'MGLT equal'
    }
};

export const genderReveal = (gender) => {
    switch (gender) {
        case 'male':
            return 'male';
        case 'female':
            return 'female';
        default:
            return 'user secret'
    }
};

export const inputPlaceholder = (entity) => {
    switch (entity) {
        case 'films':
            return 'Search by title';
        case 'people':
            return 'Search by name';
        default:
            return 'Search by name or model'
    }
};
