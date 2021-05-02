const TelegramBot = require("node-telegram-bot-api")

const TOKEN = `1769175855:AAEu4qfalHBbJG6z7Sq3LinDK3g8YTEV0ew`

const bot = new TelegramBot(TOKEN, {
    polling: true
})

bot.on('message', async message => {
    const chatId = message.chat.id
    const name = message.from.first_name
    const text =  message.text

    if(text == '/start'){
        const keyboard = {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                [
                    {
                        text: `Расписание уроков`
                    },
                    {
                        text: `Расписание звонков`
                    }
                ]
            ]
        }

        bot.sendMessage(chatId, `Здравствуйте <b>${name}</b>. Что вы хотите узнать?`, {
            parse_mode: 'HTML',
            reply_markup: keyboard
        })
    } else if (text == 'Расписание уроков'){
        const dayskeyboard = {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                [
                    {
                        text: `Понедельник`
                    },
                    {
                        text: `Вторник`
                    },
                    {
                        text: `Среда`
                    },
                ],
                [
                    {
                        text: `Четверг`
                    },
                    {
                        text: `Пятница`
                    },
                    {
                        text: `Суббота`
                    },
                ],
                [
                    {
                        text: `Назад`
                    }
                ]
            ]
        }
        bot.sendMessage(chatId, `Выберите день недели`, {
            parse_mode: 'HTML',
            reply_markup: dayskeyboard
        })

    } else if (text == `Понедельник`) {
        bot.sendMessage(chatId, `Понедельник: \n\n1. Химия \n2. Рус.язык \n3. Физика \n4. Черчение \n5. Воспитание \n6. География`, {
            parse_mode: 'HTML'
        })
    } else if (text == `Вторник`) {
        bot.sendMessage(chatId, `Вторник: \n\n1. География \n2. Алгебра \n3. История Узбекистана \n4. Физика \n5. Экономика \n6. Ин.яз`, {
            parse_mode: 'HTML'
        })
    } else if (text == `Среда`) {
        bot.sendMessage(chatId, `Среда: \n\n1. Рус.литература \n2. Информатика \n3. Геометрия \n4. Всемирная История \n5. Физкультура \n6. Узб.яз`, {
            parse_mode: 'HTML'
        })
    } else if (text == `Четверг`) {
        bot.sendMessage(chatId, `Четверг: \n\n1. Ин.яз \n2. Узб.яз \n3. Рус.язык \n4. Алгебра \n5. Биология \n6. Технология`, {
            parse_mode: 'HTML'
        })
    } else if (text == `Пятница`) {
        bot.sendMessage(chatId, `Пятница: \n\n1. Воспитательный час \n2. Физкультура \n3. Рус.литература \n4. Химия \n5. Геометрия \n6. Биология`, {
            parse_mode: 'HTML'
        })
    } else if (text == `Суббота`) {
        bot.sendMessage(chatId, `Суббота: \n\n1. Информатика \n2. Алгебра \n3. Гос.право \n4. Узб.яз \n5. Ин.яз \n6. История Узбекистана`, {
            parse_mode: 'HTML'
        })
    } else if (text == `Назад`) {
        const keyboard = {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                [
                    {
                        text: `Расписание уроков`
                    },
                    {
                        text: `Расписание звонков`
                    }
                ]
            ]
        }

        bot.sendMessage(chatId, `Вы вышли на главное меню. Что вы хотите узнать?`, {
            parse_mode: 'HTML',
            reply_markup: keyboard
        })
    } else if (text == 'Расписание звонков') {
        const dayskeyboard = {
            resize_keyboard: true,
            one_time_keyboard: true,
            keyboard: [
                [
                    {
                        text: `1-ый урок`
                    },
                    {
                        text: `2-ой урок`
                    },
                    {
                        text: `3-ий урок`
                    },
                ],
                [
                    {
                        text: `4-ый урок`
                    },
                    {
                        text: `5-ый урок`
                    },
                    {
                        text: `6-ой урок`
                    },
                ],
                [
                    {
                        text: `Назад`
                    }
                ]
            ]
        }
        bot.sendMessage(chatId, `Выберите урок`, {
            parse_mode: 'HTML',
            reply_markup: dayskeyboard
        })
    } else if (text == '1-ый урок'){
        bot.sendMessage(chatId, `Начало: 08:00 \nКонец: 08:45`)
    } else if (text == '2-ой урок'){
        bot.sendMessage(chatId, `Начало: 08:50 \nКонец: 09:35`)
    } else if (text == '3-ий урок'){
        bot.sendMessage(chatId, `Начало: 09:40 \nКонец: 10:25`)
    } else if (text == '4-ый урок'){
        bot.sendMessage(chatId, `Начало: 10:35 \nКонец: 11:20`)
    } else if (text == '5-ый урок'){
        bot.sendMessage(chatId, `Начало: 11:30 \nКонец: 12:15`)
    } else if (text == '6-ой урок'){
        bot.sendMessage(chatId, `Начало: 12:20 \nКонец: 13:05`)
    }
})