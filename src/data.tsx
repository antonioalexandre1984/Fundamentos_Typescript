export const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/antonioalexandre1984.png',
            name: 'Lucas',
            role: 'Front-end Developer'
        },
        content: [
            { type: 'paragraph', content: 'Fala Galera ✋' },
            { type: 'paragraph', content: 'Hoje vamos falar sobre ReactJS' },
            { type: 'link', content: 'antonioalexandre1984/rocketseat/ignite' },
        ],
        publishedAt: new Date('2022-09-14 08:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/antonioalexandre1984.png',
            name: 'Pedro',
            role: 'Back-end Developer'
        },
        content: [
            { type: 'paragraph', content: 'Fala Galera ✋' },
            { type: 'paragraph', content: 'Hoje vamos falar sobre o que é o ReactJS e como ele funciona.' },
            { type: 'link', content: 'antonioalexandre1984/rocketseat/ignite' },
        ],
        publishedAt: new Date('2022-09-15 08:00:00'),
    },
];
