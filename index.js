const say = require('say')
const numbers = ['1', '2', '3', '4']
module.exports = function CallOuts(mod) {
    mod.hook('S_CHAT', 2, event => {
        let message = event.message.replace(/<(.+?)>|&rt;|&lt;|&gt;|/g, '').replace(/\s+$/, '');
        if(event.channel === 1 && numbers.includes(message)) {
            say.speak(message);
        }

    })
}