const choice = (items) => {
    let itemsLength = items.length
    let randomIndex = Math.floor(Math.random() * itemsLength)
    return items[randomIndex]
};

const remove = (items, item) => {
    for(let i = 0; i < items.length; i++) {
        if(items[i] === item) {
            return items.splice(i, 1)
        } 
    }
};

export {choice, remove}