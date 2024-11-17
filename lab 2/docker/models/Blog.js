const posts = [
    { id: 1, title: 'Здорове харчування', description: 'Їжте більше овочів та фруктів.' },
    { id: 2, title: 'Фізична активність', description: 'Рухайтесь хоча б 30 хвилин щодня.' },
    { id: 3, title: 'Сон та відпочинок', description: 'Спіть не менше 7-8 годин.' },
];

class Blog {
    static getAll() {
        return posts;
    }

    static getById(id) {
        return posts.find(post => post.id === id);
    }

    static addPost(title, description) {
        const newPost = {
            id: posts.length + 1,
            title,
            description,
        };
        posts.push(newPost);
        return newPost;
    }
}

module.exports = Blog;
