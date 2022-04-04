Vue.createApp({
    data() {
        return {
            toggle: true
        }
    }
}).mount('#if')

Vue.createApp({
    data() {
        return {
            books: [
                {
                    isbn: '978-4-7981-5382-7',
                    title: '独習C# 新版',
                    price: 3600
                },
                {
                    isbn: '978-4-7741-9618-3',
                    title: 'Ruby on Rails 超入門',
                    price: 2060
                },
                {
                    isbn: '978-4-7981-5202-8',
                    title: 'Androidアプリ開発の教科書',
                    price: 2750
                },
                {
                    isbn: '978-4-7741-9572-8',
                    title: '3ステップでしっかり学ぶ MySQL入門',
                    price: 2480
                },
                {
                    isbn: '978-4-8222-5355-4',
                    title: 'アプリを作ろう！Visual C#入門',
                    price: 2000
                }],
            member: {
                name: 'Elena Smith',
                age: 25,
                mail: 'elena@example.com',
            },
            toggle: true,
            cheapBooks: [],
        }
    },
    methods: {
        under2500() {
            this.cheapBooks = this.books.filter(function(b) {
                return b.price < 2500
            })            
            this.toggle = false
        },
        showAll() {
            this.toggle = true
        }
    }
}).mount('#forLoop')