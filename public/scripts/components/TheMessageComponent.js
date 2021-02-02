export default {
    props: ['message'],

    template: `
    <article>
        <h1>This is a message</h1>
        <h4>{{message.message.name}} says:</h4>
        <p>{{message.message.content}}</p>
    </article>
    `
}